let express = require('express');
let path = require('path');
// let favicon = require('serve-favicon');
// let logger = require('morgan');
// let cookieParser = require('cookie-parser');
// let bodyParser = require('body-parser');

let fs=require('fs');

// let index = require('./routes/index');
// let users = require('./routes/users');


let app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view cache',false);

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, './dist')));

// app.use((req,res,next)=>{
//     res.locals.showTests=app.get('env') !=='production'&&req.query.test==='1';
//     next();
// });
// app.use('/index', index);
// app.use('/users', users);

app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8');
    res.send(html)
});
// catch 404 and forward to error handler
// app.use(function(req, res) {
//   res.status(404).render('404')
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });




module.exports = app;
