const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const voteRouter = require('./routes/vote');
const resultsRouter = require('./routes/results');
const musicRouter = require('./routes/musics');

const app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/vote', voteRouter);
app.use('/results', resultsRouter);
app.use('/musics', musicRouter);

module.exports = app;
