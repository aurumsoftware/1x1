import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

class App {
  public server: express.Application;

  public constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.database();
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private database(): void {
    mongoose.connect(process.env.MONGO_URL || '', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  }

  private routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
