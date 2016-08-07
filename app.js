
var socket;
$(document).ready(function() {
  socket = io.connect();

  $('form').submit(function(event) {
    socket.emit( 'chat message', $('#m').val() );
    $('#m').val('');
    return false;
  });

  socket.on('server chat message', function(msg) {
    $('#messages').append($('<li>').text(msg));
  });
});