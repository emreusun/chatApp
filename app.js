const express = require('express'); // import express
const app = express(); // create an express app
const http = require('http'); // import the node server package
const server = http.createServer(app); // use our app file with the server
// add in the socket io stuff
const { Server } = require("socket.io");
const io = new Server(server);
// extra comment for git push

const port = process.env.PORT || 3000;
app.use(express.static('public'));

// this is a route handler -> listen for incoming requests and send back a reponse
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// set up the server to listen for incoming connections at this port
server.listen(port, () => {
  console.log(`listening on ${port}`);
});

// socket.io connection

io.on('connection', function(socket) {
  console.log('a user has connected' );
  socket.emit('connected', { sID: socket.id, message: "new connection" });
  // step 1 - receive incoming messages
  socket.on('chat_message', function(msg) {
    console.log(msg); // have a look at the message date

    // step 2
    // readbroadcas the current message to everyone conenct to our chat service
    // it gets sent to all users, includein the original message creator
  
    io.emit('new_message', { id: socket.id, message: msg });
    
  })

  socket.on('disconnect', function() {
    console.log('a user has disconnected');

  })
});