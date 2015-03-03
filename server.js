// socket.io needs to mount an http server
var app = require('http').createServer();
var io = require('socket.io')(app);

// start the server on port 8888
app.listen(8888);

// this runs whenever a client (browser) connect to our server
io.on('connection', function (socket) {

  // this runs whenever the client emits 'message'
  socket.on('message', function (data) {

    // now we just emit the data to all connected clients
    io.emit('message', data);

  });

});