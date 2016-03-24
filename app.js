var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();
var erc = require('express-route-controller');
var vash = require('vash'); 
//ghost blog
// var ghost = require('./ghost-app/ghost-in-the-middle');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
app.set('view engine', 'vash');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-less-middleware')({ src: __dirname + '/public' }));

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

//引入controllers路由
erc(app,{
  controllers : path.join(__dirname, 'controllers'),
  routes : require(path.join(__dirname,'routes','routes.json'))
});
app.use('/', routes);
app.use('/users', users);

// app.use( '/blog', ghost({
//     config: path.join(__dirname, 'ghost-app/config.js')
// }) );

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000);
app.use(express.static('public'));

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
