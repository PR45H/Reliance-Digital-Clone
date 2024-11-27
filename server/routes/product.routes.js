const product = require('../controllers/Product/product.controller');

const productRouter = require('express').Router();

productRouter.get('/', product);

module.exports = productRouter