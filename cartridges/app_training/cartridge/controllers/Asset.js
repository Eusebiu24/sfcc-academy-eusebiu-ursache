"use strict";

var server = require("server");

server.get("Assets", function (req, res, next) {

  var assetss = dw.content.ContentMgr.getContent("Content_ex3");
  var assetname = assetss.name;
  res.render("home/homePage",{
    assetname:assetname
  });

  return next();
});

module.exports = server.exports();
