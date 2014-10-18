
var db = require('./database.js');


var user = {
  'name': 'user',
  'fields': [
    'id',
    'username',
    'password',
    'phone'
  ]
}



exports.create = function(req, res) {
  res.send("created a user");

  db.create(user, req.params);

}

exports.lookup = function(req, res) {
  res.send("you just looked up user number " + req.param('id'));

  db.lookup(user, {
    'id': req.params('id')
  });
}

exports.list = function(req, res) {
  res.send("here is a list of every user");

  db.lookup(user, null);
}

exports.remove = function(req, res) {
  res.send("deleted user " + req.param('id'));

  db.delete(user, {
    'id': req.params('id')
  });
}


