const mongoose = require('mongoose');
const URI = 'mongodb+srv://alex:alex%40123@todo.fbxn1kx.mongodb.net/';

const connectDB = async () => {
    await mongoose.connect(URI);
    return console.log('DB Connected...');
}

module.exports = connectDB;