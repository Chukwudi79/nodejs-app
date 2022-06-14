const express = require("express");
const router = express.Router();
const { getGoals, storeGoal, updateGoal, deleteGoal} = require('../http/controllers/goalController')

router.route('/').get(getGoals).post(storeGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);
// router.delete('/:id', deleteGoal);
// router.post('/', storeGoal);


module.exports = router;