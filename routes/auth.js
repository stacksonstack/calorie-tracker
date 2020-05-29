const express = require("express");
const router = express.Router();
const { authUser, getUser } = require("../controllers/authController");
const { auth } = require("../middleware/auth");

router.route("/").post(authUser); // log in

router.route("/user").get(auth, getUser); // gets User that have valid token saved in localStorage
module.exports = router;
