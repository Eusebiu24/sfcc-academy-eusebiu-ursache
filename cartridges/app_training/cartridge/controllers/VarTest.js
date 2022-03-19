"use strict";

var server = require("server");

// server.extend(module.superModule)

server.get("Hello", function (req, res, next) {
    
    res.render("test/vartest");
    return next();
  
});

module.exports = server.exports();

