exports.index = (req, res) => {
  res.render("index");
};

exports.show = (req, res) => {
  console.log(res.locals.name);
  res.render("board", { username: res.locals.name });
};

exports.login = (req, res) => {
  res.render("login", { err: "" });
};
