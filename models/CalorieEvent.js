const mongoose = require("mongoose");

const CalorieEventSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  type: {
    type: String,
    trim: true,
    required: [true, "Please select type"],
  },
  amount: {
    type: Number,
    required: [true, "Please add amount"],
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CalorieEvent", CalorieEventSchema);
