const User = require('../models/user');
const Pet = require('../models/pet');

module.exports = {
    index,
    viewAccount,
    addPet
}

function index(req, res, next) {
    console.log(req.user);

    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    let sortKey = req.query.sort || 'name';
    User.find(modelQuery)
    .sort(sortKey).exec(function(err, users) {
      if (err) return next(err);

      res.render('user/index', { 
      
        user: req.user, 
        name: req.query.name, 
        sortKey });
    });
  }

  async function viewAccount(req, res) {
    if (req.user) {
      let myPets = await Pet.find({userId: req.user.id})
      res.render('users/account.ejs', {user: req.user, myPets: myPets})
    } else {
      res.render("users/user-error.ejs", {user: req.user});
  }
}

  function addPet(req, res) {
    res.render('users/new.ejs', {user: req.user});
}