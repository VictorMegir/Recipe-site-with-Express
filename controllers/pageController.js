const home_page = (req, res) => {
	res.render('home', {title: 'Home'});
};

const about_page = (req, res) => {
	res.render('about', {title: 'About'});
};

const page_404 = (req, res) => {
	res.status(404).render('404', {title: '404'});
};

module.exports = {
    home_page,
    about_page,
	page_404	
};