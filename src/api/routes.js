const TimetrackRoutes = require('./components/routes/timetrackRoutes');
const BasicRoutes = require('./components/routes/basicRoutes');
const BasicUrlParamRoutes = require('./components/routes/basicUrlParamRoutes');
const cacheMiddleware = require('./middleware/cachingMiddleware');

const weatherCacheDuration = 60 * 60 * 1000;
const newsCacheDuration = 60 * 60 * 1000;
const nasaCacheDuration = 12 * 60 * 60 * 1000;

module.exports = (router, routerPrefix) => {
  router.use(`${routerPrefix}/timetracker`, new TimetrackRoutes().router);
  router.use(`${routerPrefix}/nasa`, cacheMiddleware(nasaCacheDuration), new BasicRoutes().router);
  router.use(`${routerPrefix}/joke`, new BasicRoutes().router);
  router.use(`${routerPrefix}/fact`, new BasicRoutes({ type: 'text' }).router);
  router.use(`${routerPrefix}/weather`, cacheMiddleware(weatherCacheDuration), new BasicRoutes().router);
  router.use(`${routerPrefix}/news`, cacheMiddleware(newsCacheDuration), new BasicUrlParamRoutes().router);
}
