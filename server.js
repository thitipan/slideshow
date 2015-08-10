var port = process.env.PORT || 8080; 

var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static('public'));
server.listen(port);

var currentPage = 0;
io.on('connection', function (socket) {
  socket.emit('navigate', currentPage);
  socket.on('navigate', function (page) {
    currentPage = page;
    socket.broadcast.emit('navigate', page);
  });
});
