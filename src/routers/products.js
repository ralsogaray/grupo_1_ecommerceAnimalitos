const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController");
const mainController = require("../controllers/mainController");
const path = require('path');
const multer = require('multer');
const productValidation = require('../validations/productValidation')

const baseRoute = '/products'

// multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, path.resolve('public/images')) 
    },
    filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()    
    const fileExtension = path.extname(file.originalname)   
    const fileName = file.originalname.replace(fileExtension,'')     
    cb(null, fileName + '-' + uniqueSuffix + fileExtension)
    }
})

const upload = multer({storage: storage})  


// List products
router.get(`${baseRoute}/`, productsController.index)
// New product
router.get(`${baseRoute}/new`, productsController.new)
router.post(`${baseRoute}/create`, upload.single('image'), productValidation.productCreate ,  productsController.create)
// Edit product
router.get(`${baseRoute}/edit/:productId`, productsController.edit)
router.post(`${baseRoute}/update/:productId/`, upload.single('image'), /*productValidation.productCreate,*/ productsController.update)
// Delete product
router.post(`${baseRoute}/delete/:productId/`, productsController.delete)
// Product Detail
router.get(`${baseRoute}/:productId/`, productsController.detail)

//Guardar imagen


module.exports = router;


