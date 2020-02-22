const express = require('express');
const app = express();
const morgan = require('morgan');
const obliqueStrategiesRouter = require('./api/routes/obliqueStrategies');

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', obliqueStrategiesRouter);

module.exports = app;
