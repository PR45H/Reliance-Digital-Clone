const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const connectDB = require('./config/dbConnection');
const userRouter = require('./routes/login.routes');
const cors = require('cors');
const productRouter = require('./routes/product.routes');

// middleware
app.use(express.json())
app.use(cors())

// user routes
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.listen(port, () => {
    try {
        console.log(`Server is running on port ${port}`);
        connectDB();
    } catch (error) {
        console.log(error.message);
    }
})