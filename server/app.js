import express from 'express';
// import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import jwt from 'express-jwt';
import createError from 'http-errors';
import { join } from 'path';

import './config/mongoose';
import './modals';

import user from './controllers/user';

const app = express();

// TODO: move to env var!
const PORT = 2222;
const asd = app.listen(PORT);
asd.once('listening', () => {
  console.log(`server listening at ${PORT}`);
});

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// TODO: maybe move the list of the known urls to another file, check about the auth/token
// TODO: get the secret word from env var
app.use(jwt({ secret: 'secret' }).unless({ path: ['/api/user/login'] }));

app.use('/api/user', user);

app.route('/api/*')
  .get((req, res, next) => {
    next(createError(404));
  });

app.route('/*')
  .get((req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'index.html'));
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
