const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    Name: {type: String, require: true},
    Ingredients: {type: [String], require: true},
    Instructions: {type: String, require: true},
    Credit: {type: String, require: false},
    Difficulty: {type: Number, default: 0},
    ImageName: {type: String, default: '/uploads/default.jpg'},
}, {timestamps:true});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;