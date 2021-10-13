var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var logger = require("morgan");
const cors = require("cors");
const multer = require('multer');

var indexRouter = require("./routes/index");
var memberRouter = require("./routes/member");
var adminRouter = require("./routes/admin");
var productRouter = require("./routes/product");
var storyRouter = require("./routes/story");
var session = require("express-session");


var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "Pa$$w0rd",
    resave: true,
    saveUninitialized: true
  })
)
// MySQL設定

// app.use(function(req, res, next) {
//   var mysql = require('mysql');
//   var connection = mysql.createConnection({
//     host : '127.0.0.1',
//     user : 'root',
//     password : 'root',
//     database : 'project',
//     port:8889
//   });

//   connection.connect(function(err) {
//   });

//   req.mysql = connection;
//   next();
// });

app.use(function (req, res, next) {
  var mysql = require("mysql");
  var connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "project",
    port: 3306,
  });

  connection.connect(function (err) {});

  req.mysql = connection;
  next();
});


// 路由設定
app.use("/", indexRouter);
app.use("/member", memberRouter);
app.use("/admin", adminRouter);
app.use("/product", productRouter);
app.use("/story", storyRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});




module.exports = app;
