const express = require('express')
const router = express.Router()
const productDetailController = require("../controllers/productDetailController")

router.get("/productDetail", productDetailController.renderProductDetail.index)

//** GET ONE PRODUCT */
router.get("/productDetail/:productId/", productDetailController.renderProductDetail.detail)

module.exports = router


