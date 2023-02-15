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
            .isLength({ min: 5, max: 15 }),            
        check('email')
            .notEmpty().withMessage('Ingrese un mail').bail()
            .isEmail().withMessage('Ingrese un mail válido'),
        check('password')
            .notEmpty().withMessage('Ingrese una contraseña')
            .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),                       
        check('confirmPass')
            .notEmpty().withMessage('Valide la constraseña').bail(),
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
    ],
/*    loginFormValidations: [
        check('email')
            .notEmpty().withMessage('Ingrese un mail').bail()
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
                if (!bcrypt.compareSync(req.body.password, userToLogin.password)) {
                    throw new Error('Contraseña inválida')
                }
                return true
            })
    ]
*/
}

module.exports = userValidation