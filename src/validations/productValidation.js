const path = require('path');
const db = require('../../database/models');
const {body, check, validationResult} = require ('express-validator');

const productValidation = {
    productCreate: [
        check('name')
            .notEmpty()
            .withMessage('Agregar nombre del producto.').bail()
            .isLength({min:5, max:50})
            .withMessage('El nombre debe tener un minimo de cinco letras.'),
        check('price')
            .notEmpty()
            .withMessage('Agregar precio al producto.').bail(),
        check('description')
            .notEmpty()
            .withMessage('Agregar descripción del producto.')
            .bail()
            .isLength({min:5})
            .withMessage('Debe tener un mínimo de cinco letras.')
            .bail(),
        check('category')
            .notEmpty()
            .withMessage('Agregar la categoría del producto.'),
        check('image')
            .custom(function (value, {req}) {
                if (req.file) {
                    return true;
                }
                return false;
            })
            .withMessage('Agregar una imagen formato jpg, jpeg, png')
            .bail()
            .custom(function (value, {req}) {
                const extension = [".jpg", ".jpeg", ".png"];
                const resultExtension = path.extname(req.file.originalname);
                const accepted = extension.includes(resultExtension)
                return accepted;
            })
            .withMessage('Formatos aceptados jpg, jpeg, png')
    ],

}

module.exports = productValidation