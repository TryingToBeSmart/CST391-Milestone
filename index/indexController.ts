// render the index Home page
function getIndex(req, res, next) {
    res.render('index', { title: 'Home' });
}

module.exports = {
    getIndex
}
