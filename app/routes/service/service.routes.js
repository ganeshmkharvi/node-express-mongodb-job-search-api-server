module.exports = app => {
    const services = require("../../controllers/service/service.controller.js");
    var router = require("express").Router();
    // Create a new Service
    router.post("/", services.create);
    // Retrieve all Services
    router.get("/", services.findAll);
    app.use('/api/services', router);
  };
