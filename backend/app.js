const express = require('express');
const app = express();
const morgan = require('morgan');
const obliqueStrategiesRouter = require('./api/routes/obliqueStrategies');

app.use(morgan('dev'));

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};
app.use(allowCrossDomain);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', obliqueStrategiesRouter);

module.exports = app;
