const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json()); // when the server receives requests with json formatted data in the body this middleware will handle 
//parsing that json data into js properties of the request object to be used in js

app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionRouter);
app.use('/partners', partnerRouter);



// app.all('/campsites', (req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Context-Type', 'text/plain');
//     next(); //pass control of the app routing to the next relevant routing method or this will stop here
// });

// app.get('/campsites', (req, res) => {              // response status code and headers already set in the app.all
//     res.end('Will send all the campsites to you'); // sends a message body back to client
// });

// app.post('/campsites', (req, res) => {
//     res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
// });

// app.put('/campsites', (req, res) => {
//     res.statusCode = 403;
//     res.end('Put operation not supported on  /campsites');
// });

// app.delete('/campsites', (req, res) => {
//     res.end('Deleting all campsites');
// });

// app.get('/campsites/:campsiteId', (req, res) => {
//     res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
// });

// app.post('/campsites/:campsiteId', (req, res) => {
//     res.statusCode = 403;
//     res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
// });

// app.put('/campsites/:campsiteId', (req, res) => { // what happens if you dont do res.end?
//     res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
//     res.end(`Will update the campsite: ${req.body.name} 
//         with description: ${req.body.description}`);
// });

// app.delete('/campsites/:campsiteId', (req, res) => {
//     res.end(`Deleting campsite: ${req.params.campsiteId}`);
// });


app.use(express.static(__dirname + '/public'));

//use method can take a callback middleware function w/c is a special type of function that express calls a middleware function. A middleware function in express has access to 3 parameters
//req(request object), res(response object) and next(a function) 
app.use((req, res) => {
    // console.log(req.headers); morgan will now handle logging the request in now
    res.statusCode = 200;
    res.setHeader('Content-Tyoe', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});