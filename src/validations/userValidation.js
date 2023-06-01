const { check, validationResult } = require('express-validator')
const fs = require('fs')
const path = require('path')
const bcrypt = require('bcryptjs')
const usersFilePath = path.join(__dirname, "../data/users.json");
const db = require('../../database/models');

const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userValidation = {
    registerFormValidations: [
        check('full_name')
            .notEmpty().withMessage('Ingrese su Nombre y Apellido').bail()
            .isLength({ min: 5, max: 15 }),
        check('user_name')
            .notEmpty().withMessage('Ingrese un nombre de usuario').bail()
            .isLength({ min: 5, max: 15 }).withMessage('El usuario debe tener mas de cinco letras y menos de 15.').bail(),            
        check('email')
            .notEmpty().withMessage('Ingrese un mail').bail()
            .isEmail().withMessage('Ingrese un mail válido').bail()
            .custom(async value => {
                let userEmail = await db.Users.findOne({
                    where: { 'email': value }
                })
                if (userEmail !== null) {
                    return Promise.reject();
                  }
            })
            .withMessage("El email ya se encuentra registrado."),
        check('password')
            .notEmpty().withMessage('Ingrese una contraseña').bail()
            .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres').bail(),                       
        check('confirmPass')
            .notEmpty().withMessage('Valide la constraseña').bail()
            .custom((value, { req }) => {
                //console.log(value);
                //console.log(req.body);
                if(value === req.body.password){
                return true
                }else{
                return false
                }
            })
            .withMessage('Las contraseñas no coinciden'),
        check('userImage').custom((value, { req }) => {
            let file = req.file
            let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif']
            if (!file) {
                return true
            } else {
                let fileExtension = path.extname(file.originalname)
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones aceptadas son ${acceptedExtensions.join(',')}`)
                }
            }
            return true
        })
    
    ],
    loginFormValidations: [
        check('email')
            .notEmpty().withMessage('Ingrese un email').bail()
            .isEmail().withMessage('Ingrese un mail válido')
            .custom(async (value, { req }) => {
                const userToLogin = await db.Users.findOne({ where: { email: req.body.email } })
                if (!userToLogin) {
                    throw new Error('Usuario inválido')
                }
                return true
            }),
        check('password')
            .notEmpty().withMessage('Ingrese una contraseña')
            .custom(async (value, { req }) => {
                const userToLogin = await db.Users.findOne({ where: { email: req.body.email } })
                //console.log(userToLogin.dataValues.password)
                //console.log(userToLogin.password)
                console.log(req.body.password)
                /*if (userToLogin.user_type == "admin" && req.body.password != userToLogin.password){
                    throw new Error('Contraseña inválida')
                } else if (!bcrypt.compareSync(req.body.password, userToLogin.password)){
                    throw new Error('Contraseña inválida')
                } 
                return true*/
            })/*,
            (req, res, next) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
                next();
                }*/

    ],

    /*userEdit: [
        check('full_name')
            .notEmpty().withMessage('Ingrese su Nombre y Apellido').bail()
            .isLength({ min: 5, max: 15 }),
        check('user_name')
            .notEmpty().withMessage('Ingrese un nombre de usuario').bail()
            .isLength({ min: 5, max: 15 }).withMessage('El usuario debe tener mas de cinco letras y menos de 15.').bail(),            
        check('email')
            .notEmpty().withMessage('Ingrese un mail').bail()
            .isEmail().withMessage('Ingrese un mail válido').bail()
            .custom(async value => {
                let userEmail = await db.Users.findOne({
                    where: { 'email': value }
                })
                if (userEmail !== null) {
                    if (userEmail.dataValues.email === value) {
                        return Promise.resolve();
                    } else {
                        return Promise.reject();
                    } 
                }
            }).withMessage("El email ya se encuentra registrado."),
        check('password')
            .notEmpty().withMessage('Ingrese una contraseña').bail()
            .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres').bail(),                       
        check('confirmPass')
            .notEmpty().withMessage('Valide la constraseña').bail()
            .custom((value, { req }) => {
                console.log(value);
                console.log(req.body);
                if(value === req.body.password){
                return true
                }else{
                return false
                }
            })
            .withMessage('Las contraseñas no coinciden'),
        check('userImage').custom((value, { req }) => {
            let file = req.file
            let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif']
            if (!file) {
                return true
            } else {
                let fileExtension = path.extname(file.originalname)
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones aceptadas son ${acceptedExtensions.join(',')}`)
                }
            }
            return true
        }),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
            }
    ]*/

}

module.exports = userValidation

