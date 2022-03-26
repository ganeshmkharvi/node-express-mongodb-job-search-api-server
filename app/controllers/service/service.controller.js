const db = require("../../config/db.config.js");
const { statusCode201, statusCode400, statusCode500, emptyContent, errorServices, errorCreationServices } = require('../../utility/constants');

exports.create = (req, res) => {
    // Validate request
    if (!req.body || !req.body.length > 0) {
        res.status(statusCode400).send({ message: emptyContent });
        return;
    }

    let tierList = [];

    Array.from(req.body).forEach(function (obj) {
        tierList = [];
        Array.from(obj.tiers).forEach(function (tier) {
            tierList.push(tier);
        })

        const service = new db.services({
            name: obj.name,
            type: obj.type,
            description: obj.description,
            tiers: tierList
        });

        service
            .save(service)
            // eslint-disable-next-line
            .then(data => {

                var _send = res.send;
                var sent = false;
                res.send = function (data) {
                    if (sent) return;
                    _send.bind(res)(data);
                    sent = true;
                }
                res.status(statusCode201).send((findAllRecords(res))); //Todo: Change the code to make the method wait to return all the records.
            })
            .catch(err => {
                console.log(err.message);
                res.status(statusCode500).send({
                    message:
                        err.message || errorCreationServices
                });
            });
    });

};

exports.findAll = (req, res) => {
    findAllRecords(res)
};

function findAllRecords(res) {
    db.services.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || errorServices
            });
        });
}

