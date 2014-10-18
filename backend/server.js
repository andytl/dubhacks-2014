
// Load the server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load the models
var user = require('./models/user.js');
var goal = require('./models/goal.js');
var subgoal = require('./models/subgoal.js');


app.get("/", function(req, res) {
  res.send("welcome to the webapp");
});

// User endpoints
app.get('/user', user.login);

app.post('/user', user.create);

app.put('/user/:id/password', user.updatePassword);

app.delete('/user/:id', user.remove);

// Goal endpoints
app.get('/goal', goal.list);

app.get('/goal/:id', goal.lookup);

app.post('/goal', goal.create);

app.put('/goal/:id', goal.update);

app.delete('/goal/:id', goal.remove);

// Subgoal endpoints
app.get('/subgoal', subgoal.list);

app.get('/goal/:gid/subgoal', subgoal.list);

app.get('/goal/:gid/subgoal/:id', subgoal.lookup);

app.post('/goal/:gid/subgoal', subgoal.create);

app.put('/goal/:gid/subgoal/:id', subgoal.update);

app.delete('/goal/:gid/subgoal/:id', subgoal.remove);


app.listen(3000);



// Debugger catchpoint
debugger;
