const path = require('path');
const express = require('express');
//const rootDir = require('express')
const productsController = require('../controller/contactus');
const router = express.Router();
router.get('/contactus',productsController.getContacts);


router.post('/contactus',productsController.postContacts);

module.exports = router;

