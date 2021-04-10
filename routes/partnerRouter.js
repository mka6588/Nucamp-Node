const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Context-Type', 'text/plain');
        next();
    })

    .get((req, res) => {
        res.end('Will send all the partner to you');
    })

    .post((req, res) => {
        res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
    })

    .put((req, res) => {
        res.statusCode = 403;
        res.end('Put operation not supported on  /partner');
    })

    .delete((req, res) => {
        res.end('Deleting all partner');
    });

partnerRouter.route("/:partnerId")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Context-Type', 'text/plain');
        next();
    })

    .get((req, res) => {
        res.end(`Will send details of the promotions: ${req.params.partnerId} to you`);
    })

    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /promotions/${req.params.partnerId}`);
    })

    .put((req, res) => { // what happens if you dont do res.end?
        res.write(`Updating the promotions: ${req.params.partnerId}\n`);
        res.write(`Will update the promotions: ${req.body.name} with description: ${req.body.description}`);
        res.end()
    })

    .delete((req, res) => {
        res.end(`Deleting promotions: ${req.params.partnerId}`);
    });


module.exports = partnerRouter;