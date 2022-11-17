const express = require('express');
//const path = require('path');
const router = express.Router();
const cartController = require('../controllers/cartController');


router.get('/cart', cartController.renderCart)


module.exports = router
