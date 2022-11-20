const express = require('express')
const router = express.Router()
const addProductController = require('../controllers/addProductController');
const path = require('path');
const multer = require('multer');

/**********GET ALL FORM ***********/
//router.get('/addProduct', addProductController.renderAddProduct)
router.get('/addProduct', addProductController.renderAddProduct)

/*GUARDAR IMAGEN */

const storage = multer.diskStorage({
    destination: function (req,file, cb){
        cb(null, ("public/images/products-img"));
    },
    filename: function (req, file, cb){
        const uniqueSuffix = 'product-' + Date.now() + path.extname(file.originalname);
        cb(null, uniqueSuffix);
    },
});
const upload = multer({storage});

/********** CREAT PRODUCT***********/
router.post('/addProduct', upload.single('product-image'), addProductController.storeProduct)


module.exports= router

