const express = require('express');
const morgan = require('morgan');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

//use method can take a callback function w/c is a special type of function that express calls a middleware function. A middleware function in express has access to 3 parameters
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