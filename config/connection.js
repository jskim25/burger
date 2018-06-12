// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var mysql = require("mysql");

// Creates mySQL connection
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "james",
//   password: "asdfasdf",
//   database: "burgers_db"
// });

var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting to: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exports the connection for other files to use
module.exports = connection;
