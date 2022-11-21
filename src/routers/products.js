const express = require('express');
const router = express.Router();
const productsController = require("../controllers/productsController");
const path = require('path');
const multer = require('multer');

const baseRoute = '/products'

// List products
router.get(`${baseRoute}/`, productsController.index)

// New product
router.get(`${baseRoute}/create`, productsController.create)


// Guardar imagen

const storage = multer.diskStorage({
    destination: function (req,file, cb){
        cb(null, ("../public/images/products-img"));
    },
    filename: function (req, file, cb){
        const uniqueSuffix = 'product-' + Date.now() + path.extname(file.originalname);
        cb(null, uniqueSuffix);
    },
});
const upload = multer({storage});

// Product Detail
router.get(`${baseRoute}/:id/`, productsController.detail)




module.exports = router


