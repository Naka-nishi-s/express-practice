const User = require("../models/User");

exports.loginCheck = async (req, res, next) => {
  // データを取り出す
  const email = req.body.email;
  const pass = req.body.pass;

  // エラーメッセージ
  const err_msg1 = "メールアドレスが未登録です。";
  const err_msg2 = "メールアドレス、またはパスワードが違います。";

  // ユーザ検索
  try {
    await User.findOne({ email: email })
      .then((response) => {
        if (!response) {
          // メアドが見つからない場合
          err = err_msg1;
        } else {
          if (response.password !== pass) {
            // パスワードが違う場合
            err = err_msg2;
          } else {
            // 問題なければ名前を格納して掲示板へ
            res.locals.name = response.name;
            return next();
          }
        }
      })
      .catch((err) => {
        console.log("エラー内容：", err);
      });
  } catch (e) {
    console.log("tryのエラー:", e.err);
  }

  return res.render("login", { err });
};
