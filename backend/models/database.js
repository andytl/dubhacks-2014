
var config = require('../config.js');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(config.DB_URL);

exports.db = db; // no time for fancy db, use this




function collapse(n1, n2) {
  return n1 + ', ' + n2;
}

exports.manualQuery = function(sql) {
}






// Inserts one value into db
exports.create = function(table, params) {
  // TODO ensure all fields provided
  var query = 'INSERT INTO ' + table.name + ' (';
  query += table.fields.reduce(collapse);
  query += ') VALUES (';

  query += table.fields.map(function (n) {
    return params(n);
  }).reduce(collapse);

  query += ')';

  console.log(query);
  db.run(query);
}

exports.delete = function(table, params) {
  var query = 'DELETE FROM ' + table.name + ' WHERE ';

  

}

exports.lookup = function(table, params) {
  
}

exports.update = function(table, params) {
  
}




exports.createTable = function(table) {

}

