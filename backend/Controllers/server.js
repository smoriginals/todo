const connectionDB = require('./db');
const express = require('express');
const cors = require('cors');
const addtask = require('../Routes/addtask');
const fetchtask = require('../Routes/fetchtask');
const deletetask = require('../Routes/deletetask');



connectionDB();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('server online for this PC.');
});

app.use('/task', addtask);
app.use('/task', fetchtask);
app.use('/task', deletetask);

app.listen(PORT, () => {
    console.log(`${PORT} Online...`);
});