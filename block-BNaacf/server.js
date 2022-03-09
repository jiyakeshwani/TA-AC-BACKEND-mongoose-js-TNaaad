var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test", (err) => {
  console.log(err ? err : "connected to database");
});