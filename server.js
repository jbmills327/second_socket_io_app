var express = require('express');
var socket = require('socket.io');

var app = express();

var PORT = process.env.port || 3000;

app.use(express.static('public'));

// socket setup

var server = app.listen(PORT, (err) => {
  if (err) {
    console.log("There was an issue: ", err);
  } else {
    console.log("The server is up and running on port: ", PORT);
  }
});

var io = socket(server);

// io.on('connection', function(socket) {
//   console.log("Made socket connection");
// });

io.on('connection', (socket) => {
  console.log("Made socket connection", socket.id);
});