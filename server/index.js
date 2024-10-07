const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const connectDB = require('./config/dbConnection');
const userRouter = require('./routes/login.routes');

// middleware
app.use(express.json())

// user routes
app.use('/api/user', userRouter)

app.listen(port, () => {
    try {
        console.log(`Server is running on port ${port}`);
        connectDB();
    } catch (error) {
        console.log(error.message);
    }
})