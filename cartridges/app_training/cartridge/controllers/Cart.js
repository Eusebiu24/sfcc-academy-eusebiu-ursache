"use strict";
var server = require("server");
server.extend(module.superModule);
server.append("Show", function(req, res, next) {
    var viewData = res.getViewData();
    res.setViewData(viewData);
    return next();
});
module.exports = server.exports();


// 'use strict';

// var server = require('server');

// // server.extend(module.superModule);

// server.get('Shhh', function(req, res, next){
// //   var CartModel = require('*/cartridge/models/basketModel');
//   var BasketMgr = require('dw/order/BasketMgr');
//   var Basket = BasketMgr.getCurrentBasket();
// //   var notes = info.cart.user.nonotes;

// //   var basketModel = new CartModel(Basket);
//   res.render('cart/cart');
//   return next();
// });

// module.exports = server.exports();
