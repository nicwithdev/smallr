const User = require('../models/user');
const Pet = require('../models/pet');

module.exports = {
    index,
    viewAccount,
    addPet
}

function index(req, res, next) {
    // console.log(req.query)
    console.log(req.user);
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    User.find(modelQuery)
    .sort(sortKey).exec(function(err, users) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('user/index', { 
       
        // below we creare a key called "user" whose value is req.user
        //req.user is the magic variable that passport creates
        //that contains the user's document
        user: req.user, 
        name: req.query.name, 
        sortKey });
    });
  }

  async function viewAccount(req, res) {
    let myPets = await Pet.find({userId: req.user.id})
    console.log("HELLOOOOOOOOOOOO PETS!")
    console.log(myPets);
    res.render('users/account.ejs', {user: req.user, myPets: myPets})
  }

  function addPet(req, res) {
    res.render('users/new.ejs', {user: req.user});
}