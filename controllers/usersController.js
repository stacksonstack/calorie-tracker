const User = require("../models/User");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config({ path: "./config/config.env" });

exports.updateBalance = async (req, res) => {
  try {
    var balance = { balance: req.body.balance };

    var filter = { _id: req.params.id };

    var newOne = await User.findOneAndUpdate(filter, balance, {
      new: true,
    });
    res.json({
      message: "Balance updated successfully",
      user: newOne,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.registerNewUser = async (req, res) => {
  try {
    const { name, email, password } = await req.body;

    const user = await User.findOne({ email });

    if (user) throw Error("Email already in use");

    const newUser = new User({
      name,
      email,
      password,
    });

    const salt = bcrypt.genSaltSync(10);

    if (password) newUser.password = bcrypt.hashSync(password, salt);

    const token = jwt.sign({ id: newUser._id }, process.env.SECRET, {
      expiresIn: "2h",
    });

    await newUser.save();

    res.status(201).json({
      completed: true,
      user: newUser,
      token,
    });
  } catch (err) {
    res.status(500).json({
      completed: false,
      error: err.message,
    });
  }
};
