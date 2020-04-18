const express = require('express');

const basicController = require('../controllers/basicController');
const determineEndpoint = require('../../middleware/determineEndpoint.js');

class BasicRoutes {
  constructor() {
    this.router = express.Router();
    this.initRouters();
  }

  initRouters() {  
    this.router.get('/', determineEndpoint, basicController.read);
 }
}

module.exports = BasicRoutes;