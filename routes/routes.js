exports.index = (req, res) => {
  res.render("index");
};

exports.show = (req, res) => {
  res.render("board");
};

exports.login = (req, res) => {
  res.render("login");
};
