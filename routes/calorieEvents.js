const express = require("express");
const router = express.Router();
const {
  getCalorieEvents,
  deleteCalorieEvent,
  addCalorieEvent,
} = require("../controllers/calorieController");
const { auth } = require("../middleware/auth");

router.route("/").get(getCalorieEvents).post(addCalorieEvent);

router.route("/:id").delete(deleteCalorieEvent);

module.exports = router;
