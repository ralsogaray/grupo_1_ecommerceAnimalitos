const express = require('express');
//const path = require('path');
const router = express.Router();
const userLoginController = require('../controllers/userLoginController');
const { check } = require('express-validator')


/*
const loginValidator = [
    check('email').notEmpty().withMessage('Debes completar el email'),
    check('password').notEmpty().withMessage('Debes completar la contraseña')
]*/



router.get("/login", userLoginController.renderLogin)
router.post("/login", userLoginController.processLogin)



module.exports = router;