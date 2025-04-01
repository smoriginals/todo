const mongoose = require('mongoose');
const URI = 'mongodb+srv://alex:alex%40123@todo.fbxn1kx.mongodb.net/';

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