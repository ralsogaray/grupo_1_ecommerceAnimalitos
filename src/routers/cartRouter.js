const express = require('express');
//const path = require('path');
const router = express.Router();
const cartController = require('../controllers/cartController');



const userLoginMiddleware =  require ("../../middlewares/authMiddelware")

//show cart 
router.get('/cart', userLoginMiddleware , cartController.renderCart)

// add product to DB
router.post('/cart/addProduct', cartController.addProduct)

//delete product
router.post('/deleteProductDb/:id', cartController.deleteProduct)




module.exports = router;
