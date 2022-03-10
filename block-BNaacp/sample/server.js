var express = require("express");

var mongoose = require("mongoose");
const user = require("./models/user");
var app = express();
const User = require("./models/user");
mongoose.connect("mongodb://127.0.0.1:27017/admin", (err) => {
  console.log(err ? err : "connected to database");
});

app.use(express.json());

app.post("/users", (res, req) => {
  console.log(req.body);
  User.create(req.body);
});

app.get("/users", (req, res) => {
  User.find({});
});

app.get("/users/:id", (res, req) => {
  User.find({ id }, (err, user) => {
    console.log(user);
  });
  User.findById({ id }, (err, user) => {
    console.log(user);
  });
  User.findOne({ id }, (err, user) => {
    console.log(user);
  });
});

app.delete("/users", (req, res) => {
  var userId = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) return next(err);
    res.send("user deleted");
  });
});

app.listen(3000, () => {
  console.log("server is listening to port 3k");
});
