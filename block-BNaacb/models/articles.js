var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articlesSchema = new Schema({
  name: String,
  desription: String,
  author: String,
});
