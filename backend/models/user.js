var db = require('./database.js').db;

exports.create = function(req, res) {
  var checkIfExists = "select count(*) as num from user where username = '" + req.body.username + "';";
  db.get(checkIfExists, function(err, row) {
    if (row.num > 0) {
      res.send("user already exists");
    } else {
      var insertRow = "insert into user (username, password, phone) values ('";
      insertRow += req.body.username + "', '" + req.body.password + "', '" + req.body.phone + "')";

      db.run(insertRow);

      res.send("created a user");
    }
  });
}

exports.login = function(req, res) {
  var getUserId = "select id from user where username = '" + req.param('username') + "' and password = '" + req.param('password') + "';";
  
  db.each(getUserId, function(err, row) {
    res.send("uid = " + row.id);
  }, function(err, rows) {
    if (rows == 0) {
      res.send("nope");
    }
  });
}

exports.updatePassword = function(req, res) {
  var checkIfExists = "select count(*) as num from user where id = '" + req.params.id + "';";
  var updatePw = "update user set password = '" + req.body.new_password + "' " +
                 "where id = '" + req.params.id + "';";
  db.get(checkIfExists, function(err, row) {
    if (row.num > 0) {
      db.run(updatePw);
      res.send("password updated");
    } else {
      res.send("user doesn't exist");
    }
  });
}

exports.remove = function(req, res) {
  var checkIfExists = "select count(*) as num from user where id = '" + req.params.id + "';";
  var deleteUser = "delete from user where id = '" + req.params.id + "';";
  
  db.get(checkIfExists, function(err, row) {
    if (row.num > 0) {
      db.run(deleteUser);
      res.send("user deleted");
    } else {
      res.send("user doesn't exist");
    }
  });
}