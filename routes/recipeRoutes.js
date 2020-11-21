const router = require('express').Router();
const recipeController = require('../controllers/recipeController');

router.get('/create', recipeController.recipeCreatePage);
router.post('/create', recipeController.upload, recipeController.recipeCreate);
router.get('/', recipeController.recipeList);
router.get('/:id', recipeController.getRecipe);
router.get('/edit/:id', recipeController.editRecipePage);
router.post('/edit/:id', recipeController.upload, recipeController.editRecipe);
router.post('/delete/:id', recipeController.deleteRecipe);
module.exports = router;