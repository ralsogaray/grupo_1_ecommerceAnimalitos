const express = require('express')
const router = express.Router()
const productsController = require("../controllers/productsController")

const baseRoute = '/products'

// List products
router.get(`${baseRoute}/`, productsController.index)

// Product Detail
router.get(`${baseRoute}/:id/`, productsController.detail)

module.exports = router

