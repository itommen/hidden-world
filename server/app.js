import express from 'express';
//import logger from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Users from './controllers/user/';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/hidden-world');
const db = mongoose.connection;
db.on('error', (err) => console.log('error! ' + err));
db.once('open', function () {
    console.log('mongo is ready!');
});

const app = express();

const asd = app.listen(1234);
asd.once('listening', () => {
	console.log('server listening at 1234');
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', Users);

app.use((req, res) => {
	console.log('1');
	res.sendFile(path.join(__dirname, '../client/index.html'));
	console.log('2');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


export default app;