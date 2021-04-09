const express = require('express');

const hostname = 'localhost';
const port = 3000;

const app = express();

//use method can take a callback function w/c is a special type of function that express calls a middleware function. A middleware function in express has access to 3 parameters
//req(request object), res(response object) and next(a function) 
app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Tyoe', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});