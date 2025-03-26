const connectionDB = require('./db');
const express = require('express');
const addtask = require('../Routes/addtask');
const cors = require('cors');

connectionDB();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('server online for this PC.');
});

app.use('/task', addtask);

app.listen(PORT, () => {
    console.log(`${PORT} Online...`);
});
