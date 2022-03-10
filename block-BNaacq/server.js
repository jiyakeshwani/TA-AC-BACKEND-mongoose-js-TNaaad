var express = require("express");

var mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://127.0.0.1:27017/admin", (err) => {
  console.log(err ? err : "connected to database");
});

app.listen(3000, () => {
  console.log("server is listening to port 3k");
});