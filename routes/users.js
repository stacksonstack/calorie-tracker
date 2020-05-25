const express = require("express");
const router = express.Router();
const { registerNewUser } = require("../controllers/usersController");

router.route("/").post(registerNewUser);

module.exports = router;
