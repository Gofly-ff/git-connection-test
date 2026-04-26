/**
 * 64卦完整数据
 * 包含：卦名、卦象（上下卦组合）、卦辞
 * 数据来源：《周易》经典
 */

const guaData = {
  // ==================== 上卦为乾（天）的8个卦 ====================
  "111111": {
    name: "乾",
    upper: "乾",
    lower: "乾",
    meaning: "天",
    description: "纯阳之卦，至刚至健",
    guaCi: "乾：元，亨，利，贞。",
    symbol: "☰☰"
  },
  "111010": {
    name: "天泽履",
    upper: "乾",
    lower: "兑",
    meaning: "天泽履",
    description: "踩虎尾巴但没被咬，吉利",
    guaCi: "履：履虎尾，不咥人，亨。",
    symbol: "☰☱"
  },
  "111110": {
    name: "天火同人",
    upper: "乾",
    lower: "离",
    meaning: "天火同人",
    description: "同人于野，亨",
    guaCi: "同人：同人于野，亨。利涉大川，利君子贞。",
    symbol: "☰☲"
  },
  "111100": {
    name: "天雷无妄",
    upper: "乾",
    lower: "震",
    meaning: "天雷无妄",
    description: "不妄为则大吉利",
    guaCi: "无妄：元，亨，利，贞。 其匪正有眚，不利有攸往。",
    symbol: "☰☳"
  },
  "111011": {
    name: "天山遁",
    upper: "乾",
    lower: "艮",
    meaning: "天山遁",
    description: "退避之道",
    guaCi: "遁：亨，小利贞。",
    symbol: "☰☶"
  },
  "111001": {
    name: "天地否",
    upper: "乾",
    lower: "坤",
    meaning: "天地否",
    description: "闭塞不通",
    guaCi: "否：否之匪人，不利君子贞，大往小来。",
    symbol: "☰☷"
  },
  "111101": {
    name: "天风姤",
    upper: "乾",
    lower: "巽",
    meaning: "天风姤",
    description: "意外相遇",
    guaCi: "姤：女壮，勿用取女。",
    symbol: "☰☴"
  },
  "111111_bian": {
    name: "天泽履",
    upper: "乾",
    lower: "兑",
    meaning: "变卦：天泽履",
    description: "变出天泽履",
    guaCi: "履：履虎尾，不咥人，亨。",
    symbol: "☰☱"
  },

  // ==================== 上卦为兑（泽）的8个卦 ====================
  "010111": {
    name: "泽天夬",
    upper: "兑",
    lower: "乾",
    meaning: "泽天夬",
    description: "决断果敢",
    guaCi: "夬：扬于王庭，孚号有厉，告自邑，不利即戎，利有攸往。",
    symbol: "☱☰"
  },
  "010010": {
    name: "兑",
    upper: "兑",
    lower: "兑",
    meaning: "兑为泽",
    description: "和悦之象",
    guaCi: "兑：亨，利贞。",
    symbol: "☱☱"
  },
  "010110": {
    name: "泽火革",
    upper: "兑",
    lower: "离",
    meaning: "泽火革",
    description: "变革之象",
    guaCi: "革：己日乃孚，元亨利贞，悔亡。",
    symbol: "☱☲"
  },
  "010100": {
    name: "泽雷随",
    upper: "兑",
    lower: "震",
    meaning: "泽雷随",
    description: "随从之象",
    guaCi: "随：元亨利贞，无咎。",
    symbol: "☱☳"
  },
  "010011": {
    name: "泽山咸",
    upper: "兑",
    lower: "艮",
    meaning: "泽山咸",
    description: "感应之道",
    guaCi: "咸：亨，利贞，取女吉。",
    symbol: "☱☶"
  },
  "010001": {
    name: "泽地萃",
    upper: "兑",
    lower: "坤",
    meaning: "泽地萃",
    description: "荟萃聚集",
    guaCi: "萃：亨，王假有庙，利见大人，亨利贞，用大牲吉，利有攸往。",
    symbol: "☱☷"
  },
  "010101": {
    name: "泽风大过",
    upper: "兑",
    lower: "巽",
    meaning: "泽风大过",
    description: "大为过分",
    guaCi: "大过：栋桡，利有攸往，亨。",
    symbol: "☱☴"
  },

  // ==================== 上卦为离（火）的8个卦 ====================
  "110111": {
    name: "火天大有",
    upper: "离",
    lower: "乾",
    meaning: "火天大有",
    description: "大有收获",
    guaCi: "大有：元亨。",
    symbol: "☲☰"
  },
  "110010": {
    name: "火泽睽",
    upper: "离",
    lower: "兑",
    meaning: "火泽睽",
    description: "乖离之象",
    guaCi: "睽：小事吉。",
    symbol: "☲☱"
  },
  "110110": {
    name: "离",
    upper: "离",
    lower: "离",
    meaning: "离为火",
    description: "光明之象",
    guaCi: "离：利贞，亨。畜牝牛，吉。",
    symbol: "☲☲"
  },
  "110100": {
    name: "火雷噬嗑",
    upper: "离",
    lower: "震",
    meaning: "火雷噬嗑",
    description: "咀嚼之象",
    guaCi: "噬嗑：亨，利用狱。",
    symbol: "☲☳"
  },
  "110011": {
    name: "火山旅",
    upper: "离",
    lower: "艮",
    meaning: "火山旅",
    description: "旅行之象",
    guaCi: "旅：小亨，旅贞吉。",
    symbol: "☲☶"
  },
  "110001": {
    name: "火地晋",
    upper: "离",
    lower: "坤",
    meaning: "火地晋",
    description: "晋升之象",
    guaCi: "晋：康侯用锡马蕃庶，昼日三接。",
    symbol: "☲☷"
  },
  "110101": {
    name: "火风鼎",
    upper: "离",
    lower: "巽",
    meaning: "火风鼎",
    description: "鼎新之象",
    guaCi: "鼎：元吉，亨。",
    symbol: "☲☴"
  },

  // ==================== 上卦为震（雷）的8个卦 ====================
  "100111": {
    name: "雷天大壮",
    upper: "震",
    lower: "乾",
    meaning: "雷天大壮",
    description: "壮大之象",
    guaCi: "大壮：利贞。",
    symbol: "☳☰"
  },
  "100010": {
    name: "雷泽归妹",
    upper: "震",
    lower: "兑",
    meaning: "雷泽归妹",
    description: "嫁女之象",
    guaCi: "归妹：征凶，无攸利。",
    symbol: "☳☱"
  },
  "100110": {
    name: "雷火丰",
    upper: "震",
    lower: "离",
    meaning: "雷火丰",
    description: "丰盛之象",
    guaCi: "丰：亨，王假之，勿忧，宜日中。",
    symbol: "☳☲"
  },
  "100100": {
    name: "震",
    upper: "震",
    lower: "震",
    meaning: "震为雷",
    description: "震动之象",
    guaCi: "震：亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。",
    symbol: "☳☳"
  },
  "100011": {
    name: "雷山小过",
    upper: "震",
    lower: "艮",
    meaning: "雷山小过",
    description: "小有过越",
    guaCi: "小过：亨，利贞，可小事，不可大事。飞鸟遗之音，不宜上宜下，大吉。",
    symbol: "☳☶"
  },
  "100001": {
    name: "雷地豫",
    upper: "震",
    lower: "坤",
    meaning: "雷地豫",
    description: "豫乐之象",
    guaCi: "豫：利建侯行师。",
    symbol: "☳☷"
  },
  "100101": {
    name: "雷风恒",
    upper: "震",
    lower: "巽",
    meaning: "雷风恒",
    description: "恒久之道",
    guaCi: "恒：亨，无咎，利贞，利有攸往。",
    symbol: "☳☴"
  },

  // ==================== 上卦为巽（风）的8个卦 ====================
  "101111": {
    name: "风天小畜",
    upper: "巽",
    lower: "乾",
    meaning: "风天小畜",
    description: "小有积畜",
    guaCi: "小畜：亨。密云不雨，自我西郊。",
    symbol: "☴☰"
  },
  "101010": {
    name: "风泽中孚",
    upper: "巽",
    lower: "兑",
    meaning: "风泽中孚",
    description: "诚信之象",
    guaCi: "中孚：豚鱼吉，利涉大川，利贞。",
    symbol: "☴☱"
  },
  "101110": {
    name: "风火家人",
    upper: "巽",
    lower: "离",
    meaning: "风火家人",
    description: "家庭之象",
    guaCi: "家人：利女贞。",
    symbol: "☴☲"
  },
  "101100": {
    name: "风雷益",
    upper: "巽",
    lower: "震",
    meaning: "风雷益",
    description: "增益之象",
    guaCi: "益：利有攸往，利涉大川。",
    symbol: "☴☳"
  },
  "101011": {
    name: "巽",
    upper: "巽",
    lower: "巽",
    meaning: "巽为风",
    description: "顺从之象",
    guaCi: "巽：小亨，利攸往，利见大人。",
    symbol: "☴☴"
  },
  "101001": {
    name: "风地观",
    upper: "巽",
    lower: "坤",
    meaning: "风地观",
    description: "观察之象",
    guaCi: "观：盥而不荐，有孚颙若。",
    symbol: "☴☷"
  },
  "101101": {
    name: "风水涣",
    upper: "巽",
    lower: "坎",
    meaning: "风水涣",
    description: "涣散之象",
    guaCi: "涣：亨。王假有庙，利涉大川，利贞。",
    symbol: "☴☵"
  },

  // ==================== 上卦为坎（水）的8个卦 ====================
  "011111": {
    name: "水天需",
    upper: "坎",
    lower: "乾",
    meaning: "水天需",
    description: "等待之象",
    guaCi: "需：有孚，光亨，贞吉。利涉大川。",
    symbol: "☵☰"
  },
  "011010": {
    name: "水泽节",
    upper: "坎",
    lower: "兑",
    meaning: "水泽节",
    description: "节制之象",
    guaCi: "节：亨。苦节不可贞。",
    symbol: "☵☱"
  },
  "011110": {
    name: "水火既济",
    upper: "坎",
    lower: "离",
    meaning: "水火既济",
    description: "已成之象",
    guaCi: "既济：亨，小利贞，初吉终乱。",
    symbol: "☵☲"
  },
  "011100": {
    name: "水雷屯",
    upper: "坎",
    lower: "震",
    meaning: "水雷屯",
    description: "初生之象",
    guaCi: "屯：元亨利贞，勿用有攸往，利建侯。",
    symbol: "☵☳"
  },
  "011011": {
    name: "水山蹇",
    upper: "坎",
    lower: "艮",
    meaning: "水山蹇",
    description: "艰难之象",
    guaCi: "蹇：利西南，不利东北；利见大人，贞吉。",
    symbol: "☵☶"
  },
  "011001": {
    name: "水地比",
    upper: "坎",
    lower: "坤",
    meaning: "水地比",
    description: "亲近之象",
    guaCi: "比：吉。原筮元永贞，无咎。不宁方来，后夫凶。",
    symbol: "☵☷"
  },
  "011101": {
    name: "坎",
    upper: "坎",
    lower: "坎",
    meaning: "坎为水",
    description: "险陷之象",
    guaCi: "坎：习坎，有孚，维心亨，行有尚。",
    symbol: "☵☵"
  },

  // ==================== 上卦为艮（山）的8个卦 ====================
  "110111": {
    name: "山天大畜",
    upper: "艮",
    lower: "乾",
    meaning: "山天大畜",
    description: "大有积蓄",
    guaCi: "大畜：利贞，不家食吉，利涉大川。",
    symbol: "☶☰"
  },
  "110010": {
    name: "山泽损",
    upper: "艮",
    lower: "兑",
    meaning: "山泽损",
    description: "减损之象",
    guaCi: "损：有孚，元吉，无咎，可贞，利有攸往。曷之用，二簋可用享。",
    symbol: "☶☱"
  },
  "110110": {
    name: "山火贲",
    upper: "艮",
    lower: "离",
    meaning: "山火贲",
    description: "文饰之象",
    guaCi: "贲：亨，小利有攸往。",
    symbol: "☶☲"
  },
  "110100": {
    name: "山雷颐",
    upper: "艮",
    lower: "震",
    meaning: "山雷颐",
    description: "颐养之象",
    guaCi: "颐：贞吉，观颐，自求口实。",
    symbol: "☶☳"
  },
  "110011": {
    name: "艮",
    upper: "艮",
    lower: "艮",
    meaning: "艮为山",
    description: "静止之象",
    guaCi: "艮：艮其背，不获其身，行其庭，不见其人，无咎。",
    symbol: "☶☶"
  },
  "110001": {
    name: "山地剥",
    upper: "艮",
    lower: "坤",
    meaning: "山地剥",
    description: "剥落之象",
    guaCi: "剥：不利有攸往。",
    symbol: "☶☷"
  },
  "110101": {
    name: "山水蒙",
    upper: "艮",
    lower: "坎",
    meaning: "山水蒙",
    description: "蒙昧之象",
    guaCi: "蒙：亨。匪我求童蒙，童蒙求我。初噬告，再三渎，渎则不告。利贞。",
    symbol: "☶☵"
  },

  // ==================== 上卦为坤（地）的8个卦 ====================
  "001111": {
    name: "地天泰",
    upper: "坤",
    lower: "乾",
    meaning: "地天泰",
    description: "通泰之象",
    guaCi: "泰：小往大来，吉，亨。",
    symbol: "☷☰"
  },
  "001010": {
    name: "地泽临",
    upper: "坤",
    lower: "兑",
    meaning: "地泽临",
    description: "临近之象",
    guaCi: "临：元亨利贞，至于八月有凶。",
    symbol: "☷☱"
  },
  "001110": {
    name: "地火明夷",
    upper: "坤",
    lower: "离",
    meaning: "地火明夷",
    description: "明入地中",
    guaCi: "明夷：利艰贞。",
    symbol: "☷☲"
  },
  "001100": {
    name: "地雷复",
    upper: "坤",
    lower: "震",
    meaning: "地雷复",
    description: "复归之象",
    guaCi: "复：亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。",
    symbol: "☷☳"
  },
  "001011": {
    name: "地山谦",
    upper: "坤",
    lower: "艮",
    meaning: "地山谦",
    description: "谦虚之象",
    guaCi: "谦：亨，君子有终。",
    symbol: "☷☶"
  },
  "001001": {
    name: "坤",
    upper: "坤",
    lower: "坤",
    meaning: "坤为地",
    description: "纯阴之卦，顺承天德",
    guaCi: "坤：元，亨，利牝马之贞。君子有攸往，先迷后得主。利西南得朋，东北丧朋。安贞，吉。",
    symbol: "☷☷"
  },
  "001101": {
    name: "地风升",
    upper: "坤",
    lower: "巽",
    meaning: "地风升",
    description: "上升之象",
    guaCi: "升：元亨，用见大人，勿恤，南征吉。",
    symbol: "☷☴"
  },
  "001111_bian": {
    name: "地天泰",
    upper: "坤",
    lower: "乾",
    meaning: "变卦：地天泰",
    description: "变出地天泰",
    guaCi: "泰：小往大来，吉，亨。",
    symbol: "☷☰"
  }
};

// 导出数据
module.exports = guaData;
