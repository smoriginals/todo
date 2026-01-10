const express = require('express');
const router = express.Router();
const taskSchema = require('../models/taskschema');

router.patch('/done/:id', async (req, res) => {

    try {
        const { id } = req.params;
        const { color } = req.body;
        const task = await taskSchema.findById(id);
        if (!task || !id) {
            return res.status(404).json({ message: 'Not Found, Bad Request' });
        }
        task.completed = true;
        task.color = color || 'primary';
        await task.save();
        res.status(200).json({ message: 'Task Completed', task });
    } catch (err) {
        res.status(500).json({ message: 'Network Error', error: err });
        console.log({ message: 'Network Error:', err });
    }
})

module.exports = router;