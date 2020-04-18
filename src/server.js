const express = require('Express');
const initRoutes = require('./routes');
const initMiddleware = require('./api/middleware/globalMiddleware');

class Server {
  _app = express();

  constructor() {
    this._app.use(express.json());
    initMiddleware(this._app);
    initRoutes(this._app);
  }

  get app() {
    return this._app;
  }
}

module.exports = Server;