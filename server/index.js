const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const connectDB = require('./config/dbConnection');

// routes
// const userRoute = require('./routes/user');


app.listen(port, () => {
    try {
        console.log(`Server is running on port ${port}`);
        connectDB();
    } catch (error) {
        console.log(error.message);
    }
})