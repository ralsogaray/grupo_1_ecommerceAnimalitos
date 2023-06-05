const express = require('express');
//const path = require('path');
const router = express.Router();
const userLoginController = require('../controllers/userLoginController');
const { check } = require('express-validator')
const userValidation = require('../validations/userValidation');

const userLoginMiddleware =  require ("../../middlewares/authMiddelware");
const guestMiddleware = require('../../middlewares/guestMiddelware');




router.get("/login", guestMiddleware, userLoginController.renderLogin)
router.post("/login",  userValidation.loginFormValidations, userLoginController.processLogin)
router.get('/profile', userLoginMiddleware,  userLoginController.renderProfile)

router.get('/logout', userLoginController.logOut)

router.post('/destroy', userLoginController.destroyUser)


module.exports = router;