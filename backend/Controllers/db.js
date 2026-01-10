const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const URI = process.env.CONNECTION_STRING;

const connectDB = async () => {
    try{
    await mongoose.connect(URI);
    console.log('DB Connected...');
    }
catch(error){
    console.log('DB Connection Failed...');
    }
}

module.exports = connectDB;