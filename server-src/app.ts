import * as express from 'express';
import * as routes from './routes';
import { apiRouter } from './routes';

class App {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    // const router = express.Router();
    // router.get('/', (req, res) => {
    //   res.json({
    //     message: 'Hello World!',
    //   });
    // });
    this.express.use('/api', apiRouter);
  }
}

export default new App().express;
