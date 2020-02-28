import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

class App {
  public server: express.Application;

  public constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private database(): void {
    mongoose.connect('www.com', {
      useNewUrlParser: true,
    });
  }

  private routes(): void {
    this.server.get('/', (req, res) => {
      return res.send('Ola enfermeira');
    });
  }
}

export default new App().server;
