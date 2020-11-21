const Recipe = require('../models/Recipe');
const multer = require('multer');
const path = require('path');

const recipeCreatePage = (req, res) => {
    res.render('create', {title: "Recipe | Create"});
};

const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb) {
        cb(null, file.originalname.split('.')[0] + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage}).single('image-file');

const recipeCreate = (req, res) => {
    const newRecipe = new Recipe(req.body);
    if (req.file != undefined) {
        newRecipe.ImageName = `/uploads/${req.file.filename}`        
    }
    newRecipe.save()
    .then(result => res.redirect('/recipes'))
    .catch(error => console.log(error));
};

const recipeList = (req, res) => {
    Recipe.find().sort({createdAt: -1})
    .then(result => res.render('list', {title: 'Recipes | All Recipes', recipes: result}))
    .catch(error => console.log(error));
};

const getRecipe = (req, res) => {
    const id = req.params.id;
    Recipe.findById(id)
    .then(result => res.render('details', {title: 'Recipes | '+ result.Name, recipe: result}))
    .catch(error => console.log(error));
};

const editRecipePage = (req, res) => {
    const id = req.params.id;
    Recipe.findById(id)
    .then(result => res.render('edit', {title: 'Recipes | '+ result.Name, recipe: result}))
    .catch(error => console.log(error));
};

const editRecipe = (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    if (req.file != undefined) {
        obj.ImageName = `/uploads/${req.file.filename}`;
    }
    Recipe.findByIdAndUpdate(id, obj)
    .then(result => res.redirect('/recipes'))
    .catch(error => console.log(error));
};

const deleteRecipe = (req, res) => {
    const id = req.params.id;
    Recipe.findByIdAndDelete(id, req.body)
    .then(result => res.redirect('/recipes'))
    .catch(error => console.log(error));
};

module.exports = {
    recipeCreatePage,
    recipeCreate,
    recipeList,
    getRecipe,
    editRecipePage,
    editRecipe,
    deleteRecipe,
    upload
};