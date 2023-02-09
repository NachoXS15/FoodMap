const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const Router = require('./src/routes/places.route');
const app = express();
const mongodb = require('./databases/mdb.connect')
const placesRouter = require('./src/routes/places.route')
mongodb.connectMongoDb()
    .then(()=>console.log('todo bien'))
    .catch(err => console.log(err))
    
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//complete with your resource
app.use('/places', placesRouter);

module.exports = app;
