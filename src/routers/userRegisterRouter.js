const express = require('express');
//const path = require('path');
const router = express.Router();
const userRegisterController = require('../controllers/userRegisterController');


router.get("/register", userRegisterController.renderRegister)


module.exports = router;


