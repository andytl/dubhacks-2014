
var db = require('./database.js');


exports.updatePassword = function(req, res) {

}
exports.create = function(req, res) {
  res.send("created a user");

  var query = "insert into user (username, password, phone) values (";
  query += req.query.username + ", " + req.query.password + ", " + req.query.phone + ")";

  console.log(query);
  //db.run(query);

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


