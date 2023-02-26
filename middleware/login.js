exports.loginCheck = (req, res, next) => {
  // let err = "";
  const method = req.method.toLowerCase();
  const user = req.body;
  const login = method === "post" && user;

  if (login) {
    // Postデータを取り出す
    const name = req.body.name;
    const pass = req.body.pass;

    // adminじゃなくてDBから取ってきて照合する処理
    if (name === "admin" && pass === "admin") {
      // sessionにユーザー情報を格納
      req.session.user = {
        name,
        pass,
      };

      return next();
    }

    return res.redirect("/login");
  }

  res.redirect("/login");
};
