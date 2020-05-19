const express = require('express')
const router = express.Router()
const { getCalorieEvents, deleteCalorieEvent, addCalorieEvent } = require('../controllers/calorieController')

router
    .route('/')
    .get(getCalorieEvents)
    .post(addCalorieEvent)


router
    .route('/:id')
    .delete(deleteCalorieEvent)




module.exports = router;