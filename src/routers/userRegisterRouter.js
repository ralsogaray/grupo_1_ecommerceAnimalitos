const express = require('express');
const path = require('path');
const router = express.Router();
const userRegisterController = require('../controllers/userRegisterController');
const guestMiddleware = require('../../middlewares/guestMiddelware')
const userValidation = require('../validations/userValidation');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb){
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
router.post("/register", upload.array('userImage', 12), userRegisterController.register);


module.exports = router;


