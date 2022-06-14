// Fetch Goals
const getGoals =  (req, res) => {
    res.status(200).json({message: `Get Goals`});
}

// Save new goal
const storeGoal =  (req, res) => {
    if(!req.body.my_goal)
    {
        res.status(400);
        throw new Error('Please add a text field');
    }

    res.status(200).json({message: `Get Goals`});
}

// Update goal
const updateGoal =  (req, res) => {
    res.status(200).json({message: `Goal updated ${req.params.id}`});
}

// Delete Goal
const deleteGoal =  (req, res) => {
    res.status(200).json({message: `Goals delete ${req.params.id}`});
}

module.exports = {
    getGoals,
    storeGoal,
    updateGoal,
    deleteGoal,
}