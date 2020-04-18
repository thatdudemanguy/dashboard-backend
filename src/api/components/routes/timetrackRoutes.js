const express = require('express');

const timetrackController = require('../controllers/timetrackController');
const getActivityById = require('../../middleware/timetrackMiddleware');

class TimetrackRoutes {
  constructor() {
    this.router = express.Router();
    this.initRouters();
  }

  initRouters() {  
    this.router.get('', timetrackController.readTimetracks);
    this.router.get('/:id', getActivityById, timetrackController.readTimetrackById);
    this.router.post('/', timetrackController.pushTimetrack);
    this.router.put('/:id', getActivityById, timetrackController.putTimetrackById);
    this.router.patch('/:id', getActivityById, timetrackController.patchTimetrackById);
    this.router.delete('/:id', getActivityById, timetrackController.deleteTimetrackById);
  }
}

module.exports = TimetrackRoutes;