var db = require("./database");


exports.update = function(req, res) {
  
}
exports.remove = function(req, res) {

}
exports.create = function(req, res) {
  //insert into goal (uid, text) values (req.param('uid'), req.param('text'));
  var query = "insert into goal (uid, text) values (" + req.params('uid') + ", " + req.params('text') + ");";
  res.send(query);
  //db.run(query);
}

exports.lookup = function(req, res) {
  var query = "select * from goal where uid = " + req.params('uid') + " and id = " + req.params('id') + ";";
 // res.send("you just looked up goal number " + req.param('id'));
 //db.search(query)
 res.send(query);
}

exports.list = function(req, res) {
  var query = "select * from goal where uid = " + req.params('uid') + ";";
  //res.send("here is a list of every goal");
// db.search(query);
  res.send(query);
}

