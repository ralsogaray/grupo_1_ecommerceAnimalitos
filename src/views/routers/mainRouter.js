const express = require('express');
const path = require('path');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.renderHome);
router.get('/', mainController.renderLogin);
router.get('/', mainController.renderRegister);
router.get('/', mainController.renderProductDetail);
router.get('/', mainController.renderCart);


module.exports = router;