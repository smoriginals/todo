const connectDB = require('./Controllers/db');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const addtask = require('./routes/addtask');
const fetchtask = require('./routes/fetchtask');
const donetask = require('./routes/donetask');
const deletetask = require('./routes/deletetask');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://localhost:5000",
        "https://todo-app-nine-jade-85.vercel.app"
    ]
}));

app.get("/", (req, res) => {
    res.send("Backend running");
});


app.use('/task', addtask);
app.use('/task', fetchtask);
app.use('/task', donetask);
app.use('/task', deletetask);

app.listen(PORT, () => {
    console.log(`${PORT} Online...`);
})



