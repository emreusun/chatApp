const express = require('express'); // import express
const app = express(); // create an express app
const http = require('http'); // import the node server package
const server = http.createServer(app); // use our app file with the server
// add in the socket io stuff
const { Server } = require("socket.io");
const io = new Server(server);


const port = process.env.PORT || 3000;

// this is a route handler -> listen for incoming requests and send back a reponse
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// set up the server to listen for incoming connections at this port
server.listen(port, () => {
  console.log(`listening on ${port}`);
});

// socket.io connection

io.on('connection', (socket) => {
  console.log('chat user connected' , socket);
});