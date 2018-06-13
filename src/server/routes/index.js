var express = require('express');
var router = express.Router();
var home = require('../controller/index');
var users = require('../controller/users');


module.exports = function (app) {

   app.use('/', router.get('/',home.index));
   app.use('/users', router.get('/users',users.users));

};