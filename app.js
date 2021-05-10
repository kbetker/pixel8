const createError = require('http-errors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { sequelize } = require('./db/models');
const { environment, sessionSecret } = require('./config');
const { restoreUser } = require('./auth');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const aboutRouter = require('./routes/about');
const storiesRouter = require('./routes/stories')
const submitRouter = require('./routes/submit')
const signupRouter = require('./routes/signup')

const app = express();

app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(cookieParser(sessionSecret));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

const store = new SequelizeStore({ db: sequelize });
app.use(session({
  secret: sessionSecret,
  store,
  saveUninitialized: false,
  resave: false,
}));

app.use(restoreUser);
store.sync();
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/stories', storiesRouter);
app.use('/submit', submitRouter);
app.use('/signup', signupRouter);

app.use((req, res, next) => {
  const err = new Error(`The requested page couldn't be found.`);
  err.status = 404;
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);

  if(err.status === 404){
    res.render('404');
  }else{
    res.render('error');
  }

});

module.exports = app;
