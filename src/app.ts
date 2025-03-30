import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import compression from 'compression';
import cors from 'cors';
import s3Route from './s3.route';

const app = express();
dotenv.config();

app.use(
  cors({
    credentials: true,
  })
);

app.use((req, res, next) => {
  const delay = parseInt(process.env.DELAY || '0');
  setTimeout(next, delay);
});

app.use(morgan('dev'));
app.use(compression());
app.use(express.json());

// utf8
app.use(express.urlencoded({ extended: true }));

app.use('/', s3Route);

export default app;
