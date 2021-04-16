const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Context-Type', 'text/plain');
        next();
    })

    .get((req, res) => {
        res.end('Will send all the promotions to you');
    })

    .post((req, res) => {
        res.end(`Will add the promotions: ${req.body.name} with description: ${req.body.description}`);
    })

    .put((req, res) => {
        res.statusCode = 403;
        res.end('Put operation not supported on  /promotions');
    })

    .delete((req, res) => {
        res.end('Deleting all promotions');
    });

promotionRouter.route("/:promotionId")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Context-Type', 'text/plain');
        next();
    })

    .get((req, res) => {
        res.end(`Will send details of the promotions: ${req.params.promotionId} to you`);
    })

    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /promotions/${req.params.promotionId}`);
    })

    .put((req, res) => { // what happens if you dont do res.end?
        res.write(`Updating the promotions: ${req.params.promotionId}\n`);
        res.write(`Will update the promotions: ${req.body.name} with description: ${req.body.description}`);
        res.end();
    })

    .delete((req, res) => {
        res.end(`Deleting promotions: ${req.params.promotionId}`);
    });


module.exports = promotionRouter;