const express = require('Express');
const initRoutes = require('./routes');
const initMiddleware = require('./api/middleware/globalMiddleware');

class Server {
  constructor() {
    this._app = express();
    this._app.use(express.json());
    // this._app.get('json spaces');
    initMiddleware(this._app);
    initRoutes(this._app);
  }

  get app() {
    return this._app;
  }
}

module.exports = Server;