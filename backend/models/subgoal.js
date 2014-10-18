var db = require("./database").db;

exports.create = function(req, res) {
  var checkIfExists = "select count(*) as num from goal where id = '" + req.params.gid + "' and uid = '" + req.params.uid + "';";
  db.get(checkIfExists, function(err, row) {
    if (row.num > 0) {
      var insertSubgoal = "insert into subgoal (uid, gid, text, active, points, timeToSend)" + 
                          " values (" + req.params.uid + ", " + req.params.gid + ", '" + req.body.text + 
                          "', '" + req.body.active + "', '" + req.body.points + "', '" + req.body.timeToSend + "');";
      console.log(insertSubgoal);
      db.run(insertSubgoal, function() {
        var lastId = this.lastID;
        res.json({sid: lastId});
      });
    } else {
      res.json({status: 404, message: "user or goal doesn't exist"});
    }
  });
}

exports.lookup = function(req, res) {
  var getSubgoal = "select * from subgoal where id = '" + req.params.id + "' and gid = '" + req.params.gid + "' and uid = '" + req.params.uid + "';";
  db.each(getSubgoal, function(err, row) {
    res.json({subgoal: JSON.stringify(row)});
  }, function(err, rows) {
    if (rows == 0) {
      res.json({status: 404, message: "subgoal doesn't exist"});
    }
  });
}

exports.list = function(req, res) {
  var getSubgoal = "select * from subgoal where gid = '" + req.params.gid + "' and uid = '" + req.params.uid + "';";
  var returnedData = [];
  db.each(getSubgoal, function(err, row) {
    returnedData.push(row);
  }, function(err, rows) {
    if (rows == 0) {
      res.json({status: 404, message: "subgoal doesn't exist"});
    } else {
      res.json({subgoal: JSON.stringify(returnedData)});
    }
  });
}

exports.update = function(req, res) {
  var getExistingSubgoal = "select * from subgoal where id = " + req.params.id + " and gid = " + req.params.gid + " and uid = " + req.params.uid + ";";
  var existingData = [];
  db.each(getExistingSubgoal, function(err, row) {
    existingData[0] = row.text;
    existingData[1] = row.active;
    existingData[2] = row.points;
    existingData[3] = row.timeToSend;
  }, function(err, rows) {
    if (rows == 0) {
      res.json({status: 404, message: "subgoal doesn't exist"});
    } else {
      if (req.body.text != null) {
        existingData[0] = req.body.text;
      }
      if (req.body.active != null) {
        existingData[1] = req.body.active;
      }
      if (req.body.points != null) {
        existingData[2] = req.body.points;
      }
      if (req.body.timeToSend != null) {
        existingData[3] = req.body.timeToSend;
      }
      var updateSubgoal = "update subgoal set text = '" + existingData[0] + "', active = '" + existingData[1] + "', " +
                 "points = '" + existingData[2] + "', timeToSend = '" + existingData[3] + "' " +
                 "where id = " + req.params.id + " and uid = " + req.params.uid + " and gid = " + req.params.gid + ";";
      db.run(updateSubgoal);
      res.json({status: 200, message: "subgoal updated"});
    }
  });
}

exports.remove = function(req, res) {
  var checkIfExists = "select count(*) as num from subgoal where id = " + req.params.id + " and gid = " + req.params.gid + " and uid = " + req.params.uid + ";";
  var deleteSubgoal = "delete from subgoal where id = " + req.params.id + " and uid = " + req.params.uid + ";";
  
  db.get(checkIfExists, function(err, row) {
    if (row.num > 0) {
      db.run(deleteSubgoal);
      res.json({status: 204, message: "subgoal deleted"});
    } else {
      res.json({status: 404, message: "subgoal doesn't exist"});
    }
  });
}

