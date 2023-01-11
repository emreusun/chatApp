const express = require('express'); // import express
const app = express(); // create an express app
const http = require('http'); // import the node server package
const server = http.createServer(app); // use our app file with the server


const port = process.env.PORT || 3000;

// this is a route handler -> şisten for incoming requests and sned back a reponse
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

// set up the server to listen for incoming connections at this port
server.listen(3000, () => {
  console.log('listening on ${port}');
});