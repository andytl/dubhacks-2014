var db = require("./database").db;

// app.get('/goal', goal.list);

// app.get('/goal/:id', goal.lookup);

// app.post('/goal', goal.create);

// app.put('/goal/:id', goal.update);

// app.delete('/goal/:id', goal.remove);


exports.create = function(req, res) {
  var checkIfExists = "select count(*) as num from user where id = '" + req.params.uid + "';";
  db.get(checkIfExists, function(err, row) {
    if (row.num > 0) {
      var insertGoal = "insert into goal (uid, text) values (" + req.params.uid + ", '" + req.body.text + "');";
      db.run(insertGoal, function() {
        var lastId = this.lastID;
        res.send("inserted goal with id = " + lastId);
      });
    } else {
      res.send("user doesn't exist");
    }
  });
}

exports.lookup = function(req, res) {
  var getGoal = "select * from goal where id = '" + req.params.id + "' and uid = '" + req.params.uid + "';";
  db.each(getGoal, function(err, row) {
    res.send("row = " + JSON.stringify(row));
  }, function(err, rows) {
    if (rows == 0) {
      res.send("goal doesn't exist");
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
      res.send("goal doesn't exist");
    } else {
      res.send("rows = " + JSON.stringify(returnedData))
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
      res.send("text updated");
    } else {
      res.send("goal doesn't exist");
    }
  });
}

exports.remove = function(req, res) {
  var checkIfExists = "select count(*) as num from goal where id = '" + req.params.id + "' and uid = '" + req.params.uid + "';";
  var deleteGoal = "delete from goal where id = '" + req.params.id + "' and uid = '" + req.params.uid + "';";
  
  db.get(checkIfExists, function(err, row) {
    if (row.num > 0) {
      db.run(deleteGoal);
      res.send("goal deleted");
    } else {
      res.send("goal doesn't exist");
    }
  });
}


