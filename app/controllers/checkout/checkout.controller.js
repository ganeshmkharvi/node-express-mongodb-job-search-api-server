const db = require("../../config/db.config.js");
const { statusCode201, statusCode400, statusCode500, checkoutError } = require('../../utility/constants');

exports.create = (req, res) => {
    // Validate request
    if (!req.body || !Object.keys(req.body).length > 0) {
      res.status(statusCode400).send({ message: "Content can not be empty!" });
      return;
    }

    // Create a Checkout
    const checkout = new db.checkouts({
        billingAddress: req.body.billingAddress,
        payment: req.body.payment,
        serviceVariant: req.body.serviceVariant
    });
    // Save Checkout in the database
    checkout
      .save(checkout)
      .then(data => {
         res.status(statusCode201).send(data);//Todo: put status codes in constant files.
      })
      .catch(err => {
        res.status(statusCode500).send({
          message:
            err.message || checkoutError
        });
      });
  };
  