const express = require('express');
const router = express.Router();
const taskSchema = require('../Models/task-schema');

router.post('/done', async (req,res) => {
    try {
        const { id } = req.body;
        const task = await taskSchema.findById(id);
        if (!task) {
            return res.status(404).json({ message: 'Not Found' });
        }
        task.completed = true;
        await task.save();
        res.status(200).json({ message: 'Task Completed', task });
    } catch (err) {
        res.status(500).json({ message: 'Network Error', error: err });
        console.log({ message: 'Network Error:', err });
    }
})

module.exports = router;