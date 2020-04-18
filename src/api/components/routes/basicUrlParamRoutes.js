const express = require('express');

const basicUrlParamController = require('../controllers/basicUrlParamController');
const determineEndpoint = require('../../middleware/determineEndpoint.js');

class BasicUrlParamRoutes {
  constructor() {
    this.router = express.Router();
    this.initRouters();
  }

  initRouters() {
    this.router.get('/:q', determineEndpoint, basicUrlParamController.read);
  }
}

module.exports = BasicUrlParamRoutes;