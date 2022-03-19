"use strict";

var server = require("server");

// server.extend(module.superModule)

server.get("Show", function (req, res, next) {
    var ProductMgr = require("dw/catalog/ProductMgr");
    var myProduct = ProductMgr.getProduct("008885005189M");
    var viewData = res.getViewData();

    viewData.myProduct = myProduct;
    res.render("test/vartest", {myProduct: myProduct});
    return next();
  
});

server.get("RenderTemplate", function(req, res, next){

    res.render("test/texttemplate");
    return next();
});

server.get("TestRemoteInclude", function(req, res, next){
    res.render("test/texttemplate2");
    return next();
});



server.get("TestDecorator", function(req, res, next){
    var ProductMgr = require("dw/catalog/ProductMgr");
    var myProd = ProductMgr.getProduct("008885005189M");
    var viewData = res.getViewData();

    viewData.myProd = myProd;
    res.render("test/applycustomtag");
    return next();
});


module.exports = server.exports();

