const express = require('express');
const Partner = require('../models/partner');
const partnerRouter = express.Router();

partnerRouter.route("/")
    // .all((req, res, next) => {
    //     res.statusCode = 200;
    //     res.setHeader('Context-Type', 'text/plain');
    //     next();
    // })
    .get((req, res, next) => {
        Partner.find()
            .then(partner => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(partner);
            })
            .catch(err => next(err));
    })
    .post((req, res, next) => {
        Partner.create(req.body)
            .then(partner => {
                console.log('Campsite Created ', partner);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(partner);
            })
            .catch(err => next(err));
    })

    .put((req, res) => {
        res.statusCode = 403;
        res.end('Put operation not supported on  /partner');
    })

    .delete((req, res, next) => {
        Partner.deleteMany()
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });



// .get((req, res) => {
//     res.end('Will send all the partners to you');
// })

// .post((req, res) => {
//     res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
// })

// .put((req, res) => {
//     res.statusCode = 403;
//     res.end('Put operation not supported on  /partner');
// })

// .delete((req, res) => {
//     res.end('Deleting all partner');
// });

partnerRouter.route("/:partnerId")
    // .all((req, res, next) => {
    //     res.statusCode = 200;
    //     res.setHeader('Context-Type', 'text/plain');
    //     next();
    // })

    // .get((req, res) => {
    //     res.end(`Will send details of the promotions: ${req.params.partnerId} to you`);
    // })

    // .post((req, res) => {
    //     res.statusCode = 403;
    //     res.end(`POST operation not supported on /promotions/${req.params.partnerId}`);
    // })

    // .put((req, res) => { // what happens if you dont do res.end?
    //     res.write(`Updating the promotions: ${req.params.partnerId}\n`);
    //     res.write(`Will update the promotions: ${req.body.name} with description: ${req.body.description}`);
    //     res.end();
    // })

    // .delete((req, res) => {
    //     res.end(`Deleting promotions: ${req.params.partnerId}`);
    // });

    .get((req, res, next) => {
        Partner.findById(req.params.partnerId)
            .then(partners => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(partners);
            })
            .catch(err => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /partners/${req.params.partnerId}`);
    })
    .put((req, res, next) => {
        Partner.findByIdAndUpdate(req.params.partnerId, {
            $set: req.body
        }, { new: true })
            .then(partner => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(partner);
            })
            .catch(err => next(err));
    })
    .delete((req, res, next) => {
        Partner.findByIdAndDelete(req.params.partnerId)
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });

module.exports = partnerRouter;