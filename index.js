var express = require('express');
var app = express();
var env = require("./config.json");

var pgp = require("pg-promise")(/*options*/);
var db = pgp(
    "postgres://"
    + env.db.username +
    ":"
    + env.db.password +
    "@"
    + env.db.host +
    ":"
    + env.db.port +
    "/"
    + env.db.database
);

app.post('/registration', function (req, res) {
    
});