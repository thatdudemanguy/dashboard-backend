const urls = require('../../config/url');

module.exports = (req, res, next) => {
  let targetUrl;
  try {
    const target = req.originalUrl.split("/").slice(-2, -1)[0];
    targetUrl = urls[target];

    if (targetUrl == null || targetUrl === '') {
      return res.status(404).json({ message: `Can not find the target` });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }

  req.targetUrl = targetUrl;
  next();
}
