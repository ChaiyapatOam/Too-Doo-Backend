const mongoose = require("mongoose");
const taskShema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

exports.Task = mongoose.model("Task", taskShema);
