// Load the server
var express = require('express');
var app = express();

// Load the models
var person = require('./models/person.js');


app.get("/", function(req, res) {
  res.send("welcome to the webapp");
});

/*

*/
app.get('/person', person.list);

/*

*/
app.post('/person', person.create);

/*

*/
app.get('/person/:id', person.lookup);

app.delete('/person/:id', person.remove);
/*

*/
app.get('/goal', goal.list);

/*

*/
app.post('/goal', goal.create);

/*

*/
app.get('/goal/:id', goal.lookup);

>>>>>>> 9f39d7dc65b875127e0a8837d91ceb7cea0c433d

app.listen(3000);

