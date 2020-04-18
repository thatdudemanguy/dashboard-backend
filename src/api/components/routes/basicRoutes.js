const express = require('express');

const basicController = require('../controllers/basicController');
const determineEndpoint = require('../../middleware/determineEndpoint.js');

class BasicRoutes {
  constructor({ type = '' } = {}) {
    this.router = express.Router();
    this.initRouters(type);
  }

  initRouters(o) {
    if (o !== 'text') {
      this.router.get('/', determineEndpoint, basicController.read);
    } else {
      this.router.get('/', determineEndpoint, basicController.readText);
    }
  }
}

module.exports = BasicRoutes;