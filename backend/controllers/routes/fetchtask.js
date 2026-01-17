const express = require('express');
const router = express.Router();
const taskSchema = require('../../models/taskschema');  //task-schema imported from task-schema.js.

router.get('/fetch', async (req, res) => {
   try {
       const tasks = await taskSchema.find();
       res.status(200).json(tasks);
   } catch (err) {
       res.status(500).json({ message: 'Network Error', error: err });
       console.error('Network Error:', err);
   }
});

module.exports = router;