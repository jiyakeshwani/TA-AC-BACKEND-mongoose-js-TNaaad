var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var addressSchema =
  ({
    village: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    pin: Number,
    user: Schema.Types.ObjectId,
  },
  { timestamps: true });

var address = mongoose.model("Address", addressSchema);

module.exports = address;
