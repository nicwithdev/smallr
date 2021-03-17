const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const petSchema = new Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
    age: {type: String, required: true},
    sex: {type: String, required: true},
    location: {type: String, required: true},
    photo: {type: String, required: true},
    description: String,
    // user: [{type: Schema.Types.ObjectId, ref: 'User'}]
  }, {
    timestamps: true
  });


module.exports = mongoose.model('Pet', petSchema);