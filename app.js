
var socket;
$(document).ready(function() {
  socket = io.connect();
  console.log("loaded app.js");
  $('form').submit(function(event) {
    socket.emit( 'chat message', "Hello" );
    $('#m').val('');
    return false;
  });
});