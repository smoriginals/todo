const mongoose = require('mongoose');
const createSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const taskSchema = mongoose.model('Task', createSchema);
module.exports = taskSchema;
