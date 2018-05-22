// *********************************************************************************
// MODELS >> BURGER.JS - USES THE ORM IN ORDER TO COLLECT DATA FROM DB AND SEND TO CONTROLLERS
// *********************************************************************************

// Dependencies
var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (name, cb) {
        orm.create("burgers", name, cb);
    },
    update: function (id, cb) {
        orm.update("burgers", id, cb);
    }
};

module.exports = burger;
