const TimetrackRoutes = require('./components/timetrackRoutes');

module.exports = (router, routerPrefix) => {
  router.use(`${routerPrefix}/timetracker`, new TimetrackRoutes().router);
}
