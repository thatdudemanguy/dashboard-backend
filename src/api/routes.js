const TimetrackRoutes = require('./components/routes/timetrackRoutes');

module.exports = (router, routerPrefix) => {
  router.use(`${routerPrefix}/timetracker`, new TimetrackRoutes().router);
  // TODO: add all routes
}
