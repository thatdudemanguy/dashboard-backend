const TimetrackRoutes = require('./components/routes/timetrackRoutes');
const basicRoutes = require('./components/routes/basicRoutes');

module.exports = (router, routerPrefix) => {
  router.use(`${routerPrefix}/timetracker`, new TimetrackRoutes().router);
  router.use(`${routerPrefix}/nasa`, new basicRoutes().router);
}
