var db = require('./database.js').db;

exports.create = function(req, res) {
  var checkIfExists = "select count(*) as num from user where username = '" + req.body.username + "';";
  db.get(checkIfExists, function(err, row) {
    if (row.num > 0) {
      res.status(500).json({ status: "error", message: "user already added" });
    } else {
      var insertRow = "insert into user (username, password, phone) values ('";
      insertRow += req.body.username + "', '" + req.body.password + "', '" + req.body.phone + "')";

      db.run(insertRow);

      res.json({ status: "success", message: "created a user" });
    }
  });
}

exports.login = function(req, res) {
  var getUserId = "select id from user where username = '" + req.param('username') + "' and password = '" + req.param('password') + "';";
  
  db.each(getUserId, function(err, row) {
    res.json({uid : row.id});
  }, function(err, rows) {
    if (rows == 0) {
      res.status(403).json({ status:"error", message: "Wrong username/password combination" });
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
      res.json({ status: "success", message: "password updated" });
    } else {
      res.status(500).json({ status: "error", message: "user doesn't exist" });
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
