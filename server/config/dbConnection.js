const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.TEMP_MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = connectDB;

