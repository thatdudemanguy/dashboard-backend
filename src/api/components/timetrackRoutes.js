const express = require('express');
const timetrackController = require('./controllers/timetrackController')

class TimetrackRoutes {
  constructor() {
    this.router = express.Router();
    this.initRouters();
  }

  initRouters() {  
    this.router.get('/user', timetrackController.readTimetracks);
  }
}

module.exports = TimetrackRoutes;