var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema =
  ({
    title: String,
    description: String,
    tags: [String],
    author: Schema.Types.ObjectId,
    likes: { type: Number, default: 0 },
    comments: [String],
  },
  { timestamps: true });

var article = mongoose.model("Article", articleSchema);

module.exports = article;
