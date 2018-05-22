// *********************************************************************************
// ORM.JS - TAKES INPUTS AND TURNS THEM INTO DB COMMANDS
// *********************************************************************************

// Dependencies
var connection = require("./connection.js");

var orm = {
    // get all data from db
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // create (add) data to db
    create: function (tableInput, val, cb) {
        connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // update data to db (move burgers to devoured)
    update: function (tableInput, condition, cb) {
        connection.query('UPDATE '+tableInput+ ' SET devoured=true WHERE id='+condition+';', function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
