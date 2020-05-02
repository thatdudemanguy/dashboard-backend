const cache = require('memory-cache');

let memoryCache = new cache.Cache();

const cacheMiddleware = (duration) => {
  return (req, res, next) => {
    const cacheKey = '__express__' + req.originalUrl || req.url;
    const cachedContent = memoryCache.get(cacheKey);

    if (cachedContent) {
      res.json(cachedContent);
      return;
    } else {
      // saves original send
      res.sendResponse = res.json;
      // uses send to change send, intercept and cache
      res.json = (body) => {
        memoryCache.put(cacheKey, body, duration);
        res.sendResponse(body);
      }
      next();
    }
  }
}

module.exports = cacheMiddleware;