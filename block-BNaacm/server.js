var mongoose = require("mongoose");

mongoose.connect(" mongodb://127.0.0.1:27017/admin", (err) =>
  err ? err : "Connected to database"
);
