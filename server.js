var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var port = process.env.PORT || 8080; 
server.listen(port);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html'); 
});

app.get('/control', function (req, res) {
  res.sendFile(__dirname + '/control.html');
});

var currentPage = 0;
io.on('connection', function (socket) {
  socket.emit('navigate', currentPage);
  socket.on('navigate', function (page) {
    currentPage = page;
    socket.broadcast.emit('navigate', page);
  });
});
