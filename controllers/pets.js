const Pets = require('../models/pet');


module.exports = {
    viewCat,
}



function viewCat(req, res) { 
    res.render('pets/index.ejs', {user: req.user});
};