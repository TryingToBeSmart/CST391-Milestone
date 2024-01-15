var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
import cors from'cors';
import logger from'./middleware/logger.middleware';
import dotenv from'dotenv';
import { NextFunction } from 'express';
import helmet from'helmet';

var IndexRoutes = require('./index/indexRoutes');
var AllMediaRoutes = require('./allMedia/allMedia.routes');
var AvailableMediaRoutes = require('./availableMedia/availableMedia.routes');
var StreamingServiceRoutes = require('./streamingServices/streamingServices.routes');
var UsersRoutes = require('./users/users.routes');
var UserMediaListRoutes = require('./userMediaList/userMediaList.routes');

var app = express();

dotenv.config({ path: "../.env"});
dotenv.config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // make public folder available for endpoints
app.use(cors());
app.use(helmet());

app.use('/', IndexRoutes);
app.use('/allMedia', AllMediaRoutes);
app.use('/availableMedia', AvailableMediaRoutes);
app.use('/streamingServices', StreamingServiceRoutes);
app.use('/users', UsersRoutes);
app.use('/userMediaList', UserMediaListRoutes);

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// // error handler
// app.use(function(err: Error, req: Request, res: Response, next: NextFunction) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

if (process.env.NODE_ENV == 'development') {
  // add logger middleware
  app.use(logger);
  console.log(process.env.GREETING + ' in dev mode');
}

module.exports = app;
