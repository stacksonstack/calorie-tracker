const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add username"],
  },
  email: {
    type: String,
    required: [true, "Please add email"],
  },
  password: {
    type: String,
    required: [true, "Please add password"],
  },
  balance: {
    type: Number,
    default: 2000,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
