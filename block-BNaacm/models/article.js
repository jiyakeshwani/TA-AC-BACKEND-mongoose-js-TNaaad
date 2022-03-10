var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = ({
    title: String,
    description: String
})

var article = mongoose.model('Article' , articleSchema)

module.exports= article