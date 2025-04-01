const mongoose = require('mongoose');
const { Schema } = mongoose;
const createSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default:false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const taskSchema = mongoose.model('Task', createSchema);
module.exports = taskSchema;
