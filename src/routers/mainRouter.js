const express = require('express');
const router = express.Router();
//<<<<<<< HEAD

//=======
//const multer = require('multer');
//>>>>>>> aff53be8bea2c47599c24673164f3311363efcbd
const mainController = require('../controllers/mainController');


router.get('/', mainController.renderHome);

module.exports = router;

