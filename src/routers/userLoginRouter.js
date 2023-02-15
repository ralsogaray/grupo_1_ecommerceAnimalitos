const express = require('express');
//const path = require('path');
const router = express.Router();
const userLoginController = require('../controllers/userLoginController');
const { check } = require('express-validator')

const userLoginMiddleware =  require ("../../middlewares/authMiddelware");
const guestMiddleware = require('../../middlewares/guestMiddelware');




router.get("/login", guestMiddleware, userLoginController.renderLogin)
router.post("/login",  userLoginController.processLogin)
router.get('/profile', userLoginMiddleware,  userLoginController.renderProfile)

router.get('/logout', userLoginController.logOut)


module.exports = router;