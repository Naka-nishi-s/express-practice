const express = require("express");
const logger = require("morgan");
const session = require("express-session");
const routes = require("./routes/routes");
const middleware = require("./middleware/login");
const mongoose = require("mongoose");

// urlの設定
const url = "mongodb://127.0.0.1/test_db";

// mongoDBに接続
mongoose
  .connect(url)
  .then(() => console.log("Connect Success!"))
  .catch((err) => console.log(err));

const app = express();

// View設定
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// Log出力
app.use(logger("dev"));

// public配下はstaticで使用
app.use(express.static("public"));

// session設定
app.use(
  session({
    secret: "secret",
    saveUninitialized: false,
  })
);

// bodyの中身をjsonかつPOSTで扱えるようにする
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route
app.get("/", routes.index);
app.get("/login", routes.login);
app.post("/board", middleware.loginCheck, routes.show);

// サーバー設定
app.listen(8000, console.log("サーバー起動"));
