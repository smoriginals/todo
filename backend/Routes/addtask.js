const express = require('express');
const router = express.Router();
const taskSchema = require('./backend/Models/task-schema');  //task-schema imported from task-schema.js.

router.post('add', async (req, res) => {
    const { description } = req.body;   //task in comes from task-schema.js.
    try {
        const tsk = new taskSchema({ task });
        await tsk.save();
        res.status(201).json({ message: 'Task added successfully', task: tsk });
        res.json(tsk);
    }
    catch (err) {
        res.status(500).json(err);
        console.log({ message: 'Network Error:', err });
    }
});

module.exports = router;