var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,

  email: { type: String },
  sports: [String],
});

var user = mongoose.model("User", userSchema);

module.exports = user;
