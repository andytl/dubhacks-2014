
exports.create = function(req, res) {
  res.send("created a person");
}

exports.lookup = function(req, res) {
  res.send("you just looked up person number " + req.param('id'));
}

exports.list = function(req, res) {
  res.send("here is a list of every person");
}

