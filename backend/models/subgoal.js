
exports.create = function(req, res) {
  res.send("created a subgoal");
}

exports.lookup = function(req, res) {
  res.send("you just looked up subgoal number " + req.param('id'));
}

exports.list = function(req, res) {
  res.send("here is a list of every subgoal");
}

