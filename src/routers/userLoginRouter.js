const express = require('express');
//const path = require('path');
const router = express.Router();
const userLoginController = require('../controllers/userLoginController');



router.get("/login", userLoginController.renderLogin)



module.exports = router;