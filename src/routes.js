const registerRouters = require('./api/routes');

module.exports = (router) => {
  const routerPrefix = process.env.API_PREFIX;
  registerRouters(router, routerPrefix);
}