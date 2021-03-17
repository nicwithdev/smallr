const Pets = require('../models/pet');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


module.exports = {
    viewCat,
    viewRats,
    viewMice,
    viewHams,
    viewGerb,
    viewPigs,
    viewChin,
    viewRabb,
    create,
}



function viewCat(req, res) { 
    res.render('pets/index.ejs', {user: req.user});
};

function viewRats(req, res) {
    res.render('pets/rats.ejs', {user: req.user});
}
function viewMice(req, res) {
    res.render('pets/mice.ejs', {user: req.user});
}
function viewHams(req, res) {
    res.render('pets/hams.ejs', {user: req.user});
}
function viewGerb(req, res) {
    res.render('pets/gerb.ejs', {user: req.user});
}
function viewPigs(req, res) {
    res.render('pets/pigs.ejs', {user: req.user});
}
function viewChin(req, res) {
    res.render('pets/chin.ejs', {user: req.user});
}
function viewRabb(req, res) {
    res.render('pets/rabb.ejs', {user: req.user});
}

async function create(req, res) {
    console.log(req.body);
    await Pets.create({
        name: req.body.name,
        category: req.body.category,
        age: req.body.age,
        sex: req.body.sex,
        location: req.body.location,
        photo: req.body.photo,
        description: req.body.description,
        // user: [{type: Schema.Types.ObjectId, ref: 'User'}]
    })
    res.redirect('/users/account');
}