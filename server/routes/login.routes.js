const login = require('../controllers/User/login.controller');

const userRouter = require('express').Router();

userRouter.post('/login', login);

module.exports = userRouter