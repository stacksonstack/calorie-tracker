const User = require("../models/User");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config({ path: "./config/config.env" });

exports.authUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "Enter all fields" });

    const user = await User.findOne({ email }); //pot pitfal

    if (!user) return res.status(400).json({ error: "User does not exist" });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: "Password is invalid" });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: "2h",
      });

      res.status(201).json({
        completed: true,
        user: user,
        token,
      });
    }
  } catch (err) {
    res.status(500).json({
      completed: false,
      error: err.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      completed: false,
      error: err.message,
    });
  }
};
