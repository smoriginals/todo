const express = require('express');
const cors = require('cors');
const addTask = require('./Routes/addTask');
const fetchTask = require('./Routes/fetchTask');
const doneTask = require('./Routes/doneTask');
const deleteTask = require('./Routes/deleteTask');
const dotenv = require('dotenv');

const connectDB = require('./Controllers/db');

dotenv.config();

const startServer = async () => {
    await connectDB();

    app.get("/", (req, res) => {
        res.send("Backend running");
    });
}

const app = express();
const PORT = process.env.PORT||5000;

startServer();

app.use(express.json());
app.use(cors());




app.use('/task', addTask);
app.use('/task', fetchTask);
app.use('/task', doneTask);
app.use('/task', deleteTask);

app.listen(PORT, () => {
    console.log(`${PORT} Online...`);
})