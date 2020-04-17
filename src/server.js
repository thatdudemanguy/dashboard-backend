const express = require('Express');
const initRoutes = require('./routes');

class Server {
  _app = express();

  constructor() {
    this._app.use(express.json());
    initRoutes(this._app);
  }

  get app() {
    return this._app;
  }
}

module.exports = Server;