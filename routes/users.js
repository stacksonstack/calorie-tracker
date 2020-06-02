const express = require("express");
const router = express.Router();
const {
  registerNewUser,
  updateBalance,
  updateEmail,
} = require("../controllers/usersController");

router.route("/").post(registerNewUser);
router.route("/:id").put(updateBalance);
router.route("/email/:id").put(updateEmail);

module.exports = router;
