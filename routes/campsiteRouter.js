const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter.route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Context-Type', 'text/plain');
        next(); //pass control of the app routing to the next relevant routing method or this will stop here
    })

    .get((req, res) => {              // response status code and headers already set in the app.all
        res.end('Will send all the campsites to you'); // sends a message body back to client
    })

    .post((req, res) => {
        res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
    })

    .put((req, res) => {
        res.statusCode = 403;
        res.end('Put operation not supported on  /campsites');
    })

    .delete((req, res) => {
        res.end('Deleting all campsites');
    });

campsiteRouter.route("/:campsiteId")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Context-Type', 'text/plain');
        next(); //pass control of the app routing to the next relevant routing method or this will stop here
    })

    .get((req, res) => {
        res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
    })

    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
    })

    .put((req, res) => { // what happens if you dont do res.end?
        res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
        res.end(`Will update the campsite: ${req.body.name} with description: ${req.body.description}`);
    })

    .delete((req, res) => {
        res.end(`Deleting campsite: ${req.params.campsiteId}`);
    });


module.exports = campsiteRouter;