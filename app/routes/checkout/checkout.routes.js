module.exports = app => {
    const checkout = require("../../controllers/checkout/checkout.controller.js");
    var router = require("express").Router();
    // Create a new Checkout
    router.post("/", checkout.create);
    app.use('/api/checkout', router);
  };

