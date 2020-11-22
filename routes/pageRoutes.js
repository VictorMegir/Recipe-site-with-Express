const router = require('express').Router();
const pageController = require('../controllers/pageController')

router.get('/', (req, res) => res.redirect('/recipes'));
router.get('/about',pageController.about_page);
router.use(pageController.page_404);

module.exports = router;