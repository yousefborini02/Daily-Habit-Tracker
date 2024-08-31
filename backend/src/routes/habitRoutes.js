// const express = require('express');
// const router = express.Router();
// const habitController = require('../controllers/habitController');

// router.post('/', habitController.createHabit);
// router.get('/', habitController.getHabits);
// router.put('/:id', habitController.updateHabit);
// router.delete('/:id', habitController.deleteHabit);

// module.exports = router;


const express = require('express');
const router = express.Router();
const habitController = require('../controllers/habitController');

router.post('/', habitController.createHabit);
router.get('/', habitController.getHabits);
router.put('/:id', habitController.updateHabit);
router.delete('/:id', habitController.deleteHabit);
router.put('/:id/complete', habitController.completeHabit);
router.put('/:id/incomplete', habitController.incompleteHabit);

module.exports = router;