exports.loginCheck = (req, res, next) => {
  // データを取り出す
  const name = req.body.name;
  const pass = req.body.pass;

  // adminじゃなくてDBから取ってきて照合する処理
  if (name === undefined || pass === undefined) {
    req.session.err = "先にログインをお願いします。";
    return res.redirect("/login");
  }

  // ユーザー名かパスワード違ったらリダイレクト
  if (name !== "admin" || pass !== "admin") {
    req.session.err = "ユーザー名、もしくはパスワードが違います。";
    return res.redirect("/login");
  }

  // sessionにユーザー情報を格納
  req.session.user = {
    name,
    pass,
  };
  return next();
};
