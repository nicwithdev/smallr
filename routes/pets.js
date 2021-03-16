const express = require('express');
const router = express.Router();
const petsCtrl = require('../controllers/pets');



router.get('/', petsCtrl.viewCat);
router.get('/rats', petsCtrl.viewRats);
router.get('/mice', petsCtrl.viewMice);
router.get('/hams', petsCtrl.viewHams);
router.get('/gerb', petsCtrl.viewGerb);
router.get('/pigs', petsCtrl.viewPigs);
router.get('/chin', petsCtrl.viewChin);
router.get('/rabb', petsCtrl.viewRabb);




module.exports = router;