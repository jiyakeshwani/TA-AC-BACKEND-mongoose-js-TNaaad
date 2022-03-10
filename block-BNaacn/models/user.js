var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  age: { type: Number, default: 0 },
  email: { type: String, lowercase: true },
  password: { type: String, minlength: 5 },
  createdAt: { type: Number, default: Date.now() },
  faviorites: [String],
} , {timestamps:true});

var user = mongoose.model("User", userSchema);

module.exports = user;
