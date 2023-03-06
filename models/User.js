const mongoose = require("mongoose");

// スキーマのタイプを設定
const UserSchema = mongoose.Schema({
  id: String,
  email: String,
  password: String,
  name: String,
});

// UserSchemaモデルをUserという名前でexport
module.exports = mongoose.model("User", UserSchema);
