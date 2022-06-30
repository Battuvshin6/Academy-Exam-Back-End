const mongoose = require("mongoose");
const modal = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  date: Date,
  topic: String,
});
module.exports = mongoose.model("userModal", modal);
