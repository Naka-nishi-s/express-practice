const express = require("express");
const logger = require("morgan");
const session = require("express-session");
const routes = require("./routes/routes");
const middleware = require("./middleware/login");

const app = express();

// View設定
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// Log出力
app.use(logger("dev"));

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
app.get("/board", middleware.loginCheck, routes.show);
app.get("/login", routes.login);
app.post("/login", middleware.loginCheck, routes.index);

// サーバー設定
app.listen(8000, console.log("サーバー起動"));
