var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var rootPath = path.normalize(__dirname + '/');

// ask express to serve files as they are without any pre-processing
app.use(express.static(rootPath));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/calculator', function(req, res) {
  res.sendFile(__dirname + '/calculator.html');
});

io.sockets.on('connection', function(socket) {
  // notify all users that a new user has connected
  io.emit('serverMsg:newUser', 'New User has joined this chat');

  socket.on('chat message', function(msg) {
    io.emit('server chat message', msg);
  });

  socket.on('disconnect', function() {
    io.emit('serverMsg:disconnectUser', 'User has disconnected');
  });
});

http.listen(3000, function() {
  console.log("Listening on port 3000");
});