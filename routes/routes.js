exports.index = (req, res) => {
  res.render("index");
};

exports.show = (req, res) => {
  res.render("board");
};

exports.login = (req, res) => {
  // エラーあれば格納
  let err = "";
  if (req.session.err) {
    err = req.session.err;
  }

  res.render("login", { err });
};
