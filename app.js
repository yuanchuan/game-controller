var http = require('http')
  , nodeStatic = require('node-static')
  , socketio = require('socket.io');

var staticServer = new nodeStatic.Server('./games')
  , port = 3000;

var server = http.createServer(function(req, res) {
	req.addListener('end', function() {
		staticServer.serve(req, res);
	});
});

var io = socketio.listen(
  server.listen(port, function() {
    console.log('Listening on port: %s', port);
  })
);

io.sockets.on('connection', function(socket) {
  ['keyup', 'keydown'].forEach(function(evt) {
    socket.on(evt, function(data) {
      socket.broadcast.emit(evt, data);
    }); 
  });
});

