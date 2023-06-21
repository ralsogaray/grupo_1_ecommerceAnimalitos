const express = require('express');
//const path = require('path');
const router = express.Router();
const userLoginController = require('../controllers/userLoginController');
//const { check } = require('express-validator')
const userValidation = require('../validations/userValidation');

const userLoginMiddleware =  require ("../../middlewares/authMiddelware");
const guestMiddleware = require('../../middlewares/guestMiddelware');



// show login view
router.get("/login", guestMiddleware, userLoginController.renderLogin)

// post log in info
router.post("/login",  userValidation.loginFormValidations, userLoginController.processLogin)

//show user profile
router.get('/profile', userLoginMiddleware,  userLoginController.renderProfile)

//log out
router.get('/logout', userLoginController.logOut)

// erase profile
router.post('/destroy', userLoginController.destroyUser)


module.exports = router;