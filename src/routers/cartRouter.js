const express = require('express');
//const path = require('path');
const router = express.Router();
const cartController = require('../controllers/cartController');



const userLoginMiddleware =  require ("../../middlewares/authMiddelware")


router.get('/cart', userLoginMiddleware , cartController.renderCart)


module.exports = router;
