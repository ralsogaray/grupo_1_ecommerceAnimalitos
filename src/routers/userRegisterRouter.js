const express = require('express');
const path = require('path');
const router = express.Router();
const userRegisterController = require('../controllers/userRegisterController');
const guestMiddleware = require('../../middlewares/guestMiddelware')
const userValidation = require('../validations/userValidation');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        //console.log(file)
        cb(null, path.resolve("public/images/users/"))
    },
    filename: function (req, file, cb){
        const uniqueSuffix = Date.now();
        const fileExtension = path.extname(file.originalname);
        const newName = file.originalname.replace(fileExtension, '')
        cb(null, newName + "-" + uniqueSuffix + fileExtension);
    },
});

const upload = multer({ storage });

router.get("/register", guestMiddleware, userRegisterController.renderRegister);
router.post("/register", upload.single('userImage') , userValidation.registerFormValidations, userRegisterController.register);

//agregar destroy usuario. 

module.exports = router;


