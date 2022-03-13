"use strict";

var server = require("server");
var csrfProtection = require("*/cartridge/scripts/middleware/csrf");
var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");

server.get("Showw", server.middleware.https,
    consentTracking.consent, function(req, res, next) {
    var Resource = require("dw/web/Resource");
    var URLUtils = require("dw/web/URLUtils");

    var forme = server.forms.getForm('acc');
    forme.clear();

    res.render('account/formrender', {
        title: Resource.msg("description.form.title.test", "forms", null),
        forme: forme,
        actionUrl: URLUtils.url("Account-Submit").toString()
        // actionUrl: actionUrl
    })
     return next();
});


server.post(
    "Submit",
    server.middleware.https,
    consentTracking.consent,
    function(req, res, next) {
        var Resource = require("dw/web/Resource");
        var URLUtils = require("dw/web/URLUtils");
       // var actionUrl = dw.web.URLUtils.url('Account-Handler')
       var CustomObjectMgr = require("dw/object/CustomObjectMgr");
       var Transaction = require("dw/system/Transaction");
        var forme = server.forms.getForm("acc");

        var id = "CustomObject";

        var object = CustomObjectMgr.getCustomObject("NewsletterSubscription", id);


        if (!object) {
            Transaction.wrap(function () {
                object = CustomObjectMgr.createCustomObject("NewsletterSubscription", id);
                 object.custom.firstName = forme.test.firstname.value;
                 object.custom.lastName = forme.test.lastname.value;
                 object.custom.email = forme.test.email.value;
            });
            res.render("account/formresponses", {
                title: Resource.msg("training.form.title.results", "forms", null),
                forme: forme,
                // actionUrl: actionUrl
                 actionUrl: URLUtils.url("Account-Showw").toString()
            });
            return next();
        } else {
            object.clear();
        }
        next();
});

module.exports = server.exports();
