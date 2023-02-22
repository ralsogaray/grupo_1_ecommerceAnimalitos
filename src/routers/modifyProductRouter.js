const express = require('express')
const router = express.Router()
const modifyProductController = require('../controllers/modifyProductController')

//router.get("/modifyProduct", modifyProductController.renderModifyProduct.modify)

//** EDIT ONE PRODUCT */

// router.get("/modifyProduct/:productId/", modifyProductController.renderModifyProduct.edit)
// router.get("/deleteProduct/:productId/", modifyProductController.renderModifyProduct.modify)
// router.delete("/deleteProduct/:productId/", modifyProductController.renderModifyProduct.delete)
// router.put("/modifyProduct/:productId/", modifyProductController.renderModifyProduct.update)

module.exports = router