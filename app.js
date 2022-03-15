const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const todosRouter = require('./app/api/todos/router');

const url = '/api/v1';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.json({
        message : 'Welcome api clone trello',
        version : '1.0'
    });
});

app.use(`${url}`, todosRouter);

module.exports = app;
