const TimetrackRoutes = require('./components/routes/timetrackRoutes');
const BasicRoutes = require('./components/routes/basicRoutes');
const BasicUrlParamRoutes = require('./components/routes/basicUrlParamRoutes');

module.exports = (router, routerPrefix) => {
  router.use(`${routerPrefix}/timetracker`, new TimetrackRoutes().router);
  router.use(`${routerPrefix}/nasa`, new BasicRoutes().router);
  router.use(`${routerPrefix}/joke`, new BasicRoutes().router);
  router.use(`${routerPrefix}/fact`, new BasicRoutes({ type: 'text' }).router);
  router.use(`${routerPrefix}/weather`, new BasicRoutes().router);
  router.use(`${routerPrefix}/news`, new BasicUrlParamRoutes().router);
}
