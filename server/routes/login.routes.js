const login = require('../controllers/User/login.controller');
const register = require('../controllers/User/register.controller');

const userRouter = require('express').Router();

userRouter.post('/login', login);
userRouter.post('/register', register);

module.exports = userRouter