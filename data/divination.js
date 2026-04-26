/**
 * 问吧 - 起卦算法服务
 * 核心算法：梅花易数 + 六爻纳甲
 * 
 * 功能说明：
 * - 梅花易数：用用户问题的字数/笔画数/时间数字生成卦象
 * - 六爻纳甲：结合年月日时天干地支，生成动爻
 * 
 * 作者：问吧开发团队
 * 版本：1.0.0
 */

// 引入数据
const guaData = require('../数据/gua_data');
const yaoData = require('../数据/yao_data');

// ==================== 常量定义 ====================

/**
 * 八卦定义
 * 乾三连(☰) - 111
 * 坤六断(☷) - 000
 * 震仰盂(☳) - 100
 * 艮覆碗(☶) - 110
 * 离中虚(☲) - 101
 * 坎中满(☵) - 010
 * 兑上缺(☱) - 011
 * 巽下断(☴) - 001
 */
const BAGUA = {
  '111': { name: '乾', symbol: '☰', wuxing: '金' },
  '000': { name: '坤', symbol: '☷', wuxing: '土' },
  '100': { name: '震', symbol: '☳', wuxing: '木' },
  '110': { name: '艮', symbol: '☶', wuxing: '土' },
  '101': { name: '离', symbol: '☲', wuxing: '火' },
  '010': { name: '坎', symbol: '☵', wuxing: '水' },
  '011': { name: '兑', symbol: '☱', wuxing: '金' },
  '001': { name: '巽', symbol: '☴', wuxing: '木' }
};

// 天干
const TIANGAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

// 地支
const DIZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 六亲和五行对应
const WUXING_RELATIONS = {
  '金': { '金': '兄弟', '木': '官鬼', '水': '子孙', '火': '妻财', '土': '父母' },
  '木': { '金': '官鬼', '木': '兄弟', '水': '父母', '火': '子孙', '土': '妻财' },
  '水': { '金': '子孙', '木': '妻财', '水': '兄弟', '火': '父母', '土': '官鬼' },
  '火': { '金': '妻财', '木': '父母', '水': '官鬼', '火': '兄弟', '土': '子孙' },
  '土': { '金': '父母', '木': '子孙', '水': '妻财', '火': '官鬼', '土': '兄弟' }
};

// ==================== 工具函数 ====================

/**
 * 计算字符串笔画数（简单估算）
 * 注意：这是简化版，实际项目中建议使用更精确的笔画字典
 */
function countStrokes(str) {
  // 简化的笔画计算（以字符数代替，实际应查字典）
  let count = 0;
  for (let char of str) {
    // 中文简体字平均笔画约10画
    if (/[\u4e00-\u9fa5]/.test(char)) {
      count += 10;
    } else {
      // 英文/数字每字符算1画
      count += 1;
    }
  }
  return count;
}

/**
 * 获取当前时间信息
 * @returns {Object} 包含年月日时的天干地支
 */
function getTimeInfo() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();
  
  // 计算年干支（简化计算）
  const yearGanIndex = (year - 1984 + 60) % 10;
  const yearZhiIndex = (year - 1984 + 60) % 12;
  const yearGan = TIANGAN[yearGanIndex];
  const yearZhi = DIZHI[yearZhiIndex];
  
  // 计算月干支（简化计算）
  const monthZhiIndex = (month + 2) % 12;
  const monthGanIndex = (yearGanIndex * 2 + month) % 10;
  const monthGan = TIANGAN[monthGanIndex];
  const monthZhi = DIZHI[monthZhiIndex];
  
  // 计算日干支（简化计算，实际需要查万年历）
  const totalDays = Math.floor((now.getTime() - new Date(2020, 0, 1).getTime()) / (1000 * 60 * 60 * 24));
  const dayGanIndex = (totalDays + 7) % 10;
  const dayZhiIndex = (totalDays + 9) % 12;
  const dayGan = TIANGAN[dayGanIndex];
  const dayZhi = DIZHI[dayZhiIndex];
  
  // 计算时干支
  const hourZhiIndex = Math.floor(hour / 2) % 12;
  const hourGanIndex = (dayGanIndex * 2 + Math.floor(hour / 2)) % 10;
  const hourGan = TIANGAN[hourGanIndex];
  const hourZhi = DIZHI[hourZhiIndex];
  
  return {
    year: { gan: yearGan, zhi: yearZhi },
    month: { gan: monthGan, zhi: monthZhi },
    day: { gan: dayGan, zhi: dayZhi },
    hour: { gan: hourGan, zhi: hourZhi }
  };
}

/**
 * 获取地支对应的五行
 */
function getZhiWuxing(zhi) {
  const wuxingMap = {
    '子': '水', '丑': '土', '寅': '木', '卯': '木',
    '辰': '土', '巳': '火', '午': '火', '未': '土',
    '申': '金', '酉': '金', '戌': '土', '亥': '水'
  };
  return wuxingMap[zhi] || '土';
}

/**
 * 生成梅花易数的卦象
 * @param {string} question 用户问题
 * @param {Object} timeInfo 时间信息
 * @returns {Object} 上下卦信息
 */
function generateMeihuaGua(question, timeInfo) {
  // 计算各种数值
  const charCount = question.length; // 字数
  const strokeCount = countStrokes(question); // 笔画数
  const hourValue = timeInfo.hour.gan.charCodeAt(0); // 时干 ASCII
  
  // 生成上卦（动象）
  const upperValue = (charCount + hourValue) % 8;
  const upperIndex = upperValue === 0 ? 7 : upperValue - 1;
  const upperTrigrams = Object.keys(BAGUA);
  const upperTrigram = upperTrigrams[upperIndex] || '111';
  
  // 生成下卦（体象）
  const lowerValue = (strokeCount + timeInfo.day.gan.charCodeAt(0)) % 8;
  const lowerIndex = lowerValue === 0 ? 7 : lowerValue - 1;
  const lowerTrigram = upperTrigrams[lowerIndex] || '000';
  
  return {
    upper: BAGUA[upperTrigram],
    upperTrigram: upperTrigram,
    lower: BAGUA[lowerTrigram],
    lowerTrigram: lowerTrigram
  };
}

/**
 * 生成六爻纳甲的动爻
 * @param {Object} meihuaResult 梅花易数结果
 * @param {Object} timeInfo 时间信息
 * @returns {number} 动爻位置（1-6）
 */
function generateLiuyaoDongYao(meihuaResult, timeInfo) {
  // 获取时支五行
  const hourWuxing = getZhiWuxing(timeInfo.hour.zhi);
  const dayWuxing = getZhiWuxing(timeInfo.day.zhi);
  
  // 计算动爻（基于五行生克关系）
  // 比和：动爻在1、4位
  // 相生：动爻在2、5位
  // 相克：动爻在3、6位
  
  let dongYao;
  
  if (hourWuxing === dayWuxing) {
    // 比和关系
    dongYao = Math.floor(Math.random() * 2) + 1; // 1-2
    if (dongYao === 1) dongYao = 1;
    else if (dongYao === 2) dongYao = 4;
  } else {
    // 获取五行生克关系
    const wuxingOrder = ['木', '火', '土', '金', '水'];
    const hourIndex = wuxingOrder.indexOf(hourWuxing);
    const dayIndex = wuxingOrder.indexOf(dayWuxing);
    
    // 顺时针为相生，逆时针为相克
    const diff = (hourIndex - dayIndex + 5) % 5;
    
    if (diff === 1 || diff === 2) {
      // 相生关系
      dongYao = Math.floor(Math.random() * 2) + 1;
      if (dongYao === 1) dongYao = 2;
      else dongYao = 5;
    } else {
      // 相克关系
      dongYao = Math.floor(Math.random() * 2) + 1;
      if (dongYao === 1) dongYao = 3;
      else dongYao = 6;
    }
  }
  
  return dongYao;
}

/**
 * 生成变卦
 * @param {string} originalGua 原卦二进制
 * @param {number} dongYao 动爻位置
 * @returns {string} 变卦二进制
 */
function generateBianGua(originalGua, dongYao) {
  // 将原卦转换为数组
  const guaArray = originalGua.split('');
  
  // 动爻位置（1-6对应数组索引0-5）
  const index = dongYao - 1;
  
  // 阳爻变阴爻，阴爻变阳爻
  guaArray[index] = guaArray[index] === '1' ? '0' : '1';
  
  return guaArray.join('');
}

/**
 * 根据上下卦获取完整卦象信息
 * @param {string} upperTrigram 上卦
 * @param {string} lowerTrigram 下卦
 * @returns {Object} 卦象数据
 */
function getGuaInfo(upperTrigram, lowerTrigram) {
  // 组合卦的键
  const guaKey = upperTrigram + lowerTrigram;
  
  // 查找卦数据
  let gua = guaData[guaKey];
  
  // 如果没找到，生成默认数据
  if (!gua) {
    const upper = BAGUA[upperTrigram] || BAGUA['000'];
    const lower = BAGUA[lowerTrigram] || BAGUA['111'];
    
    gua = {
      name: upper.name + lower.name,
      upper: upper.name,
      lower: lower.name,
      meaning: upper.name + lower.name,
      description: '易经六十四卦之一',
      guaCi: '卦辞待查',
      symbol: upper.symbol + lower.symbol
    };
  }
  
  return gua;
}

/**
 * 根据卦名和爻位获取爻辞
 * @param {string} guaName 卦名
 * @param {number} yaoPosition 爻位（1-6）
 * @returns {Object} 爻辞数据
 */
function getYaoInfo(guaName, yaoPosition) {
  const key = guaName + '_' + yaoPosition;
  let yao = yaoData[key];
  
  // 如果没找到，生成默认数据
  if (!yao) {
    yao = {
      position: yaoPosition,
      yaoCi: '爻辞待查',
      description: '易经爻辞'
    };
  }
  
  return yao;
}

// ==================== 主函数 ====================

/**
 * 起卦主函数
 * @param {string} question 用户问题
 * @returns {Object} 完整的起卦结果
 */
function getDivination(question) {
  // 1. 获取时间信息
  const timeInfo = getTimeInfo();
  
  // 2. 梅花易数生成卦象
  const meihuaResult = generateMeihuaGua(question, timeInfo);
  
  // 3. 生成动爻
  const dongYao = generateLiuyaoDongYao(meihuaResult, timeInfo);
  
  // 4. 获取本卦信息
  const benGua = getGuaInfo(meihuaResult.upperTrigram, meihuaResult.lowerTrigram);
  
  // 5. 生成变卦
  const bianGuaTrigram = generateBianGua(
    meihuaResult.upperTrigram + meihuaResult.lowerTrigram,
    dongYao
  );
  
  // 变卦的上下卦（简化处理，取前后3位）
  const bianUpperTrigram = bianGuaTrigram.substring(0, 3);
  const bianLowerTrigram = bianGuaTrigram.substring(3, 6);
  const bianGua = getGuaInfo(bianUpperTrigram, bianLowerTrigram);
  
  // 6. 获取本卦爻辞
  const benYao = getYaoInfo(benGua.name, dongYao);
  
  // 7. 获取变卦爻辞（动爻位置的爻辞）
  const bianYao = getYaoInfo(bianGua.name, dongYao);
  
  // 8. 组合结果
  return {
    success: true,
    question: question,
    timeInfo: {
      year: timeInfo.year.gan + timeInfo.year.zhi,
      month: timeInfo.month.gan + timeInfo.month.zhi,
      day: timeInfo.day.gan + timeInfo.day.zhi,
      hour: timeInfo.hour.gan + timeInfo.hour.zhi
    },
    benGua: {
      name: benGua.name,
      upper: benGua.upper,
      lower: benGua.lower,
      meaning: benGua.meaning,
      guaCi: benGua.guaCi,
      symbol: benGua.symbol,
      upperSymbol: meihuaResult.upper.symbol,
      lowerSymbol: meihuaResult.lower.symbol
    },
    dongYao: dongYao,
    bianGua: {
      name: bianGua.name,
      upper: bianGua.upper,
      lower: bianGua.lower,
      meaning: bianGua.meaning,
      guaCi: bianGua.guaCi,
      symbol: bianGua.symbol,
      upperSymbol: BAGUA[bianUpperTrigram]?.symbol || '☰',
      lowerSymbol: BAGUA[bianLowerTrigram]?.symbol || '☷'
    },
    yaoInfo: {
      benYao: {
        position: dongYao,
        yaoCi: benYao.yaoCi,
        description: benYao.description
      },
      bianYao: {
        position: dongYao,
        yaoCi: bianYao.yaoCi,
        description: bianYao.description
      }
    },
    // 用于AI解读的摘要
    summary: {
      benGuaName: benGua.name,
      benGuaCi: benGua.guaCi,
      dongYaoPosition: dongYao,
      yaoCi: benYao.yaoCi,
      bianGuaName: bianGua.name
    }
  };
}

// 导出函数
module.exports = {
  getDivination,
  getTimeInfo,
  BAGUA,
  TIANGAN,
  DIZHI
};

// 测试代码（仅在直接运行时执行）
if (require.main === module) {
  console.log('=== 问吧起卦算法测试 ===\n');
  
  // 测试用例
  const testQuestion = '今天天气如何';
  console.log('问题：', testQuestion);
  console.log('\n时间信息：');
  console.log(getTimeInfo());
  
  console.log('\n起卦结果：');
  const result = getDivination(testQuestion);
  console.log(JSON.stringify(result, null, 2));
}
