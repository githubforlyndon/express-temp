/* GET users page. */
var users = {};

users.users = function(req, res, next) {
  res.render('index', { title: 'Express index' });
};

module.exports = users;

