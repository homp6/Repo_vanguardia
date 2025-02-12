var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/*import Blog from './Schema/Blog';

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cluster0.ganph.mongodb.net/').then(() => console.log('Connected!'));
*/

require('dotenv').config();
console.log(process.env.NEW_API);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var estudiantes = require('./routes/estudiantes');
var gremio = require('./routes/gremio');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/estudiantes', estudiantes);
app.use('/gremio', gremio);

/*const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});*/

/*const article = new Blog({

  title: 'Awesome Post!',
  slug: 'awesome-post',
  published: true,
  content: 'This is the best post ever',
  tags: ['featured', 'announcement'],
});

// Insert the article in our MongoDB database

await article.save();

const fArticle = await Blog.obtenerGremio(1, "Gremio de Hechiceros").exec();
console.log(fArticle);
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
