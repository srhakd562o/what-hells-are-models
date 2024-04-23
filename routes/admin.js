const path = require('path');
const express = require('express');

const productsController = require('../controller/product');
const router = express.Router();

// GET route to render the add product form
router.get('/add-product',productsController.getAddProduct);

// POST route to handle form submission and add product
router.post('/add-product',productsController.postAddProduct);

module.exports = router;
