import * as express from 'express';
import * as mongoose from "mongoose";
import { appMiddleware } from './middleware';
import { apiRouter } from './routes';

class App {
  public express;
  public mongoUrl: string = 'mongodb+srv://admin:<admin>@cluster0-mivcc.mongodb.net/test?retryWrites=true&w=majority';

  constructor() {
    this.express = express();
    this.mountRoutes();
    this.mongoSetup();
  }

  private mountRoutes(): void {
    this.express.use(appMiddleware(this.express));
    this.express.use('/api', apiRouter);
  }
    
  private mongoSetup(): void{
    mongoose.Promise = global.Promise;
    // mongoose.connect(this.mongoUrl, {useNewUrlParser: true}).then(
    //   () => {
    //     console.log('connected');
    //   },
    //   (err) => {
    //     console.log('disconnected',err);
    //   }
    // );       
    mongoose.connect(this.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology:true
    });

    const db = mongoose.connection;
    db.on("error", () => {
        console.log("> error occurred from the database");
    });
    db.once("open", () => {
        console.log("> successfully opened the database");
    });
  }
}

export default new App().express;
