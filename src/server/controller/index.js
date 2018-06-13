
/* GET home page. */
var home = {};

home.index = function(req, res, next) {
  res.render('index', { title: 'Express www' });
};

module.exports = home;
