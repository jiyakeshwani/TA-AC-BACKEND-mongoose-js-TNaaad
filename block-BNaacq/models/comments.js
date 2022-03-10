var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var commentsSchema =
  ({
    content: String,
    author: Schema.Types.ObjectId,
    article: String,
  },
  { timestamps: true });

var comment = mongoose.model("Comment", commentsSchema);

module.exports = comment;
