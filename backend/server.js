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

app.listen(3000);

