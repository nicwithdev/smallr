var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("Hello")
  console.log(req.user);
  res.render('index.ejs', {user : req.user});
});

module.exports = router;
