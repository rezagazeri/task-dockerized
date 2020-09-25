import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import {MONGO_OPTIONS, MONGO_URI, port} from './config';

class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.initialServer();
    this.setConfigExpress();
    this.setMongoconnect();
    this.setRedisCaching();
    this.setRoutes();
  }

  private initialServer() {
    this.app.listen(port, () => {
      console.log(`server running on port : ${port}`);
    });
  }

  private setMongoconnect() {
    mongoose
      .connect(MONGO_URI, MONGO_OPTIONS)
      .then(() => {
        console.info('Mongoose connection done');
      })
      .catch((e) => {
        console.info('Mongoose connection error');
      });
  }

  private setConfigExpress() {
    this.app.use(cors());
    this.app.use(bodyParser.json({limit: '1mb'}));
    this.app.use(bodyParser.urlencoded({limit: '1mb', extended: true}));
  }
  private setRedisCaching() {}
  private setRoutes() {}
}

export default App;
