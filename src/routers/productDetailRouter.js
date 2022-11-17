const express = require('express')
const router = express.Router()
const productDetailController = require("../controllers/productDetailController")

router.get("/productDetail", productDetailController.renderProductDetail)

module.exports = router


