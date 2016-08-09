$(document).ready(function() {
  var socket = io.connect();

  $('form').submit(function(event) {
    socket.emit( 'chat message', $('#m').val() );
    $('#m').val('');
    return false;
  });

  var addMessage = function(msg, klass) {
    var el = $('<li>').text(msg);
    if (klass) el.addClass(klass);
    $('#messages').append(el);
  }

  socket.on('server chat message', function(msg) {
    addMessage(msg);
  });

  socket.on('serverMsg:newUser', function(msg) {
    addMessage(msg, 'server-msg');
  });

  socket.on('serverMsg:disconnectUser', function(msg) {
    addMessage(msg, 'server-msg');
  });
});