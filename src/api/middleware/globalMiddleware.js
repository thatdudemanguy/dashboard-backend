const loggingMiddleware = require('./loggingMiddleware');

module.exports = (router) => {
  router.use(loggingMiddleware);
}