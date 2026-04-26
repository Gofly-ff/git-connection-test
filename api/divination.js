const { getDivination } = require('../data/divination');

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

  const { question } = req.body || {};
  
  if (!question || question.trim() === '') {
    res.status(400).json({ success: false, error: '问题不能为空' });
    return;
  }

  const result = getDivination(question);
  
  res.status(200).json({
    success: true,
    data: result
  });
};
