const Pet = require('../models/pet');
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
    show,
    deletePet,
    updatePet,
    updateForm
}



function viewCat(req, res) { 
    res.render('pets/index.ejs', {user: req.user});
};

async function viewRats(req, res) {
    let myPets = await Pet.find();
    res.render('pets/rats.ejs', {user: req.user, pets: myPets});
}
async function viewMice(req, res) {
    let myPets = await Pet.find();
    res.render('pets/mice.ejs', {user: req.user, pets: myPets});
}
async function viewHams(req, res) {
    let myPets = await Pet.find();
    res.render('pets/hams.ejs', {user: req.user, pets: myPets});
}
async function viewGerb(req, res) {
    let myPets = await Pet.find();
    res.render('pets/gerb.ejs', {user: req.user, pets: myPets});
}
async function viewPigs(req, res) {
    let myPets = await Pet.find();
    res.render('pets/pigs.ejs', {user: req.user, pets: myPets});
}
async function viewChin(req, res) {
    let myPets = await Pet.find();
    res.render('pets/chin.ejs', {user: req.user, pets: myPets});
}
async function viewRabb(req, res) {
    let myPets = await Pet.find();
    res.render('pets/rabb.ejs', {user: req.user, pets: myPets});
}

async function create(req, res) {
    console.log(req.body);
    await Pet.create({
        name: req.body.name,
        category: req.body.category,
        age: req.body.age,
        sex: req.body.sex,
        location: req.body.location,
        photo: req.body.photo,
        description: req.body.description,
        userId: req.user.id,
        ownerEmail: req.user.email
    })
    res.redirect('/users/account');
}

async function show(req, res) {
    let result = await Pet.findById(req.params.id);
    res.render('pets/show.ejs', {user: req.user, result: result});
}

async function deletePet(req, res) {
    let result = await Pet.findByIdAndDelete(req.params.id);
    res.redirect('/users/account');
  }

async function updatePet(req, res) {
    console.log("WE HERE")
    let updated = await Pet.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        category: req.body.category,
        age: req.body.age,
        sex: req.body.sex,
        location: req.body.location,
        photo: req.body.photo,
        description: req.body.description,
        userId: req.user.id,
        ownerEmail: req.user.email
    });
    console.log("AHHHHHHH")
    res.redirect('/users/account');
}

async function updateForm(req, res) {
    let result = await Pet.findById(req.params.id);
    res.render('pets/update', {user: req.user, result: result});
}