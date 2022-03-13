var express = require('express');
var router = express.Router();

var users = [{id: 1, name: "Mahsa", account: "Mashasdi"},
             {id: 2, name: "Farrukh", account: "Farrukhal"},
             {id: 3, name: "Nurbulat", account: "NurbulatKZ"}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.get('/:id', function(req, res, next) {
  var user = users.filter(function(u) {return req.params.id == u.id;})[0];
  res.send(user);
});

module.exports = router;
