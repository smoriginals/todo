const express = require('express');
const router = express.Router();
const taskSchema = require('../Models/task-schema');

router.delete('/delete/:id', async (req, res) => {
    try {
        const {id} = req.params.id;
        const deletedtasks = await taskSchema.findByIdAndDelete(taskId);
        if (!deletedtasks) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    }
    catch (err) {
        res.status(500).json({ message: 'Network Error', error: err });
        console.log({ message: 'Network Error:', err });
    }
})

module.exports = router;
