const express = require('express');
const path = require('path');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.renderHome);
router.get('/login', mainController.renderLogin);
router.get('/register', mainController.renderRegister);
router.get('/productDetail', mainController.renderProductDetail);
router.get('/cart', mainController.renderCart);


module.exports = router;