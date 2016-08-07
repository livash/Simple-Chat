var app = require('express')();
var http = require('http').Server(app);
var socket = require('socket.io')(http);

app.get('/chat', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

socket.on('connection', function(socket) {
  console.log('a user connected');
})

http.listen(3000, function() {
  console.log("Listening on port 3000");
});