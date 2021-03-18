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
router.get('/:id', petsCtrl.show);
router.get('/:id/update', petsCtrl.updateForm);
router.post('/new', petsCtrl.create);
router.delete('/:id', petsCtrl.deletePet);
router.put('/:id/update', petsCtrl.updatePet);



module.exports = router;