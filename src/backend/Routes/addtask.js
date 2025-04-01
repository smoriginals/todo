const express = require('express');
const router = express.Router();
const taskSchema = require('../Models/task-schema');  //task-schema imported from task-schema.js.

router.post('/add', async (req, res) => {
    const { description } = req.body;   //task in comes from task-schema.js.
    try {
        const tsk = new taskSchema({ description });
        await tsk.save();
        res.status(201).json({ message: 'Task added successfully', task: tsk });
    }
    catch (err) {
        res.status(500).json({ message: 'Network Error', error: err });
        console.log({ message: 'Network Error:', err });
    }
});

module.exports = router;