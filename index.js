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

io.sockets.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('chat message', function(msg) {
    console.log(msg);
  });

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
})

http.listen(3000, function() {
  console.log("Listening on port 3000");
});