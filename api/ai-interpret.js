module.exports = async (req, res) => {
  // 设置CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: '不支持的请求方法' });
    return;
  }

  const { guaName, yaoCi, question } = req.body || {};
  
  if (!guaName || !yaoCi || !question) {
    res.status(400).json({ success: false, error: '缺少必要参数' });
    return;
  }

  // 模拟AI解读
  const interpretation = generateMockInterpretation(guaName, yaoCi, question);
  
  res.status(200).json({
    success: true,
    data: { interpretation }
  });
};

function generateMockInterpretation(guaName, yaoCi, question) {
  const interpretations = {
    '乾': '乾卦象征天，代表着刚健、自强不息的品质。"用九：见群龙无首，吉"告诉我们，在团队中不需要强出头，而是要发挥每个人的特长，共同协作。就像天一样，包容万物却不自居首位。这种智慧在现代管理学中也有体现——优秀的领导者懂得授权，让团队成员各展所长。',
    '坤': '坤卦象征地，代表柔顺、宽厚的品质。"用六：利永贞"告诉我们，保持柔顺的姿态和坚定的信念是非常重要的。就像大地承载万物一样，我们在生活中也要学会包容和承载。有时候，退一步海阔天空，柔弱胜刚强是一种更高明的智慧。',
    'default': `这个${guaName}卦蕴含着深刻的传统文化智慧。爻辞"${yaoCi}"表达了先人对自然和人生的观察与思考。从文化学习角度来看：1. 历史典故：这个卦象反映了古人对天地自然的认识；2. 哲学思想：体现了阴阳相生相克的道理；3. 现实意义：告诉我们要顺应时势，把握规律。温馨提示：本内容仅供传统文化学习参考，不构成任何决策依据哦~`
  };

  return interpretations[guaName] || interpretations['default'];
}
