var db = require("./database").db;

exports.create = function(req, res) {
  var checkIfExists = "select count(*) as num from user where id = '" + req.params.uid + "';";
  db.get(checkIfExists, function(err, row) {
    if (row.num > 0) {
      var insertGoal = "insert into goal (uid, text) values (" + req.params.uid + ", '" + req.body.text + "');";
      db.run(insertGoal, function() {
        var lastId = this.lastID;
        res.json({gid: lastId});
      });
    } else {
      res.json({status: 404, message: "user doesn't exist"});
    }
  });
}

exports.lookup = function(req, res) {
  var getGoal = "select * from goal where id = '" + req.params.id + "' and uid = '" + req.params.uid + "';";
  db.each(getGoal, function(err, row) {
    res.json({row: JSON.stringify(row)});
  }, function(err, rows) {
    if (rows == 0) {
      res.json({status: 404, message: "goal doesn't exist"});
    }
  });
}

exports.list = function(req, res) {
  var getGoal = "select * from goal where uid = '" + req.params.uid + "';";
  var returnedData = [];
  db.each(getGoal, function(err, row) {
    returnedData.push(row);
  }, function(err, rows) {
    if (rows == 0) {
      res.json({status: 404, message: "goal doesn't exist"});
    } else {
      res.json({rows: JSON.stringify(returnedData)});
    }
  });
}

exports.update = function(req, res) {
  var checkIfExists = "select count(*) as num from goal where id = '" + req.params.id + "' and uid = '" + req.params.uid + "';";
  var updateText = "update goal set text = '" + req.body.new_text + "' " +
                 "where id = '" + req.params.id + "' and uid = '" + req.params.uid + "';";
  db.get(checkIfExists, function(err, row) {
    if (row.num > 0) {
      db.run(updateText);
      res.json({status: 200, message:"text updated"});
    } else {
      res.json({status: 404, message: "goal doesn't exist"});
    }
  });
}

exports.remove = function(req, res) {
  var checkIfExists = "select count(*) as num from goal where id = '" + req.params.id + "' and uid = '" + req.params.uid + "';";
  var deleteGoal = "delete from goal where id = '" + req.params.id + "' and uid = '" + req.params.uid + "';";
  
  db.get(checkIfExists, function(err, row) {
    if (row.num > 0) {
      db.run(deleteGoal);
      res.json({status: 204, message: "goal deleted"});
    } else {
      res.json({status: 404, message: "goal doesn't exist"});
    }
  });
}


