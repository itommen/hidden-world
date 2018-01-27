import 'dotenv/config';
import express from 'express';
// import logger from 'morgan';
import cookieParser from 'cookie-parser';
import jwt from 'express-jwt';
import createError from 'http-errors';
import { join } from 'path';

import bodyParseConfig from './config/body-parser';

import './config/mongoose';
import './modals';

import controllers from './controllers';

const app = express();

const PORT = process.env.PORT;
const asd = app.listen(PORT);
asd.once('listening', () => {
  console.log(`server listening at ${PORT}`);
});

app.use(express.static(join(__dirname, 'uploads')));

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
bodyParseConfig(app);
app.use(cookieParser());
// TODO: maybe move the list of the known urls to another file, check about the auth/token

app.use(jwt({ secret: process.env.SECRET }).unless({ path: ['/api/user/login'] }));

controllers(app);

app.route('/api/*')
  .get((req, res, next) => {
    next(createError(404));
  });

app.route('/*')
  .get((req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'index.html'));
  });

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message || 'Bad Request'
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // TODO: check about that. maybe should just return the deafult file.
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.send({
    message: err.message
  });
});

export default app;
