var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

const message = require("./config/message");
const routes = require('./routes/index');
const dbconnect = require('./services/connect');

const cors = require('cors');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

new routes(app).configRoutes();
new dbconnect().connect();

app.use(function (req, res, next) {
  res.json({ response: message.noPageFound });
});

module.exports = app;