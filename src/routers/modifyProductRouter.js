const express = require('express')
const router = express.Router()
const modifyProductController = require('../controllers/modifyProductController')

router.get("/modifyProduct", modifyProductController.renderModifyProduct)

module.exports = router