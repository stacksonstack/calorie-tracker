const express = require("express");
const router = express.Router();
const {
  registerNewUser,
  updateBalance,
} = require("../controllers/usersController");

router.route("/").post(registerNewUser);
router.route("/:id").put(updateBalance);
module.exports = router;
