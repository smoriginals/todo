const express = require('express');
const router = express.Router();
const taskSchema = require('../../models/taskschema');

router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskSchema.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ message: 'Task Not Found,Bad Request' });
        }
        res.status(200).json({ message: 'Task Deleted', task });
    } catch (err) {
        res.status(500).json({ message: 'Network Error', error: err });
        console.log({ message: 'Network Error:', err });
    }
})


module.exports = router;
