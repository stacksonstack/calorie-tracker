const CalorieEvent = require("../models/CalorieEvent");

exports.getCalorieEvents = async (req, res, next) => {
  try {
    const calorieEvents = await CalorieEvent.find();

    return res.status(200).json({
      completed: true,
      count: calorieEvents.length,
      results: calorieEvents,
    });
  } catch (err) {
    return res.status(500).json({
      completed: false,
      error: err.message,
    });
  }
};

exports.addCalorieEvent = async (req, res, next) => {
  try {
    const { text, type, amount, createdBy } = await req.body;

    const newResponse = new CalorieEvent({
      text,
      type,
      amount,
      createdBy,
    });

    await newResponse.save();

    return res.status(201).json({
      completed: true,
      results: newResponse,
    });
  } catch (err) {
    return res.status(500).json({
      completed: false,
      error: err.message,
    });
  }
};

exports.deleteCalorieEvent = async (req, res, next) => {
  try {
    const calorieEvent = await CalorieEvent.findById(req.params.id);

    if (!calorieEvent) {
      return res.status(404).json({
        completed: false,
        error: "No transaction found",
      });
    }

    await calorieEvent.remove();

    return res.status(200).json({
      completed: true,
    });
  } catch (err) {
    return res.status(500).json({
      completed: false,
      error: "Could not delete item",
    });
  }
};
