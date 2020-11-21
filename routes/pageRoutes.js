const router = require('express').Router();
const pageController = require('../controllers/pageController')

router.get('/', (req, res) => pageController.home_page(req, res));
router.get('/about', (req, res) => pageController.about_page(req, res));
router.use((req, res) => pageController.page_404(req, res));

module.exports = router;