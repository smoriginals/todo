const connectionDB = require('./db');
const express = require('express');
const cors = require('cors');
const addTask = require('../Routes/addtask');
const fetchTask = require('../Routes/fetchtask');
const doneTask = require('../Routes/donetask');
const deleteTask = require('../Routes/deletetask');

connectionDB();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('server online for this PC.');
});

app.use('/task', addTask);
app.use('/task', fetchTask);
app.use('/task', doneTask);
app.use('/task', deleteTask);

app.listen(PORT, () => {
    console.log(`${PORT} Online...`);
});