const connectDB = require('./Controllers/db');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const addtask = require('./routes/addtask');
const fetchtask = require('./routes/fetchtask');
const donetask = require('./routes/donetask');
const deletetask = require('./routes/deletetask');

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




app.use('/task', addtask);
app.use('/task', fetchtask);
app.use('/task', donetask);
app.use('/task', deletetask);

app.listen(PORT, () => {
    console.log(`${PORT} Online...`);
})