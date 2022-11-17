const express = require('express')
const router = express.Router()
const addProductController = require('../controllers/addProductController')


router.get('/addProduct', addProductController.renderAddProduct)

module.exports= router

