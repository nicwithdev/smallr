const express = require('express');
const router = express.Router();
const petsCtrl = require('../controllers/pets');



router.get('/', petsCtrl.viewCat);





module.exports = router;