const mongoose = require("mongoose");
const modal = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  taskName: String,
  orderNumber: {
    type: Number,
    required: [true, "Enter the Number!"],
  },
  doneTime: Boolean,
});
module.exports = mongoose.model("taskModel", modal);
