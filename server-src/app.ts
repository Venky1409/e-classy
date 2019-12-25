import * as express from 'express';
import { appMiddleware } from './middleware';
import { apiRouter } from './routes';

class App {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    this.express.use(appMiddleware(this.express));
    this.express.use('/api', apiRouter);
  }
}

export default new App().express;
