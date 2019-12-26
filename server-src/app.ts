import * as express from 'express';
import * as mongoose from "mongoose";
import * as bodyParser from 'body-parser';
mongoose.Promise = require('bluebird');
import { appMiddleware } from './middleware';
import { apiRouter } from './routes';

class App {
  public express;
  public connectionString: string = "mongodb+srv://admin:admin@eclassycluster-wfo6k.mongodb.net/dbeclassy?retryWrites=true&w=majority";

  constructor() {
    this.express = express();
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.mountRoutes();
    this.mongoSetup();
  }

  private mountRoutes(): void {
    this.express.use(appMiddleware(this.express));
    this.express.use('/api', apiRouter);
  }

  private mongoSetup() {
    try {
      // DON'T REMOVE THIS LINE. To use this line make this function as async type.
      // await mongoose.connect(this.connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

      mongoose.connect(this.connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        promiseLibrary: require('bluebird')
      }).then(() => console.log('connection succesful'))
        .catch((err) => console.error(err));
    } catch (error) {
      throw error || 'Error while connecting to server.';
    }
  }
}

export default new App().express;

// mongoose.Promise = global.Promise;
// mongoose.connect(this.mongoUrl, {useNewUrlParser: true}).then(
//   () => {
//     console.log('connected');
//   },
//   (err) => {
//     console.log('disconnected',err);
//   }
// );       
// mongoose.connect(this.mongoUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology:true
// });

// const db = mongoose.connection;
// db.on("error", () => {
//     console.log("> error occurred from the database");
// });
// db.once("open", () => {
//     console.log("> successfully opened the database");
// });
