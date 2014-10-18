


exports.create = function(req, res) {
  res.send("created a goal");
}

exports.lookup = function(req, res) {
  res.send("you just looked up goal number " + req.param('id'));
}

exports.list = function(req, res) {
  res.send("here is a list of every goal");
}

