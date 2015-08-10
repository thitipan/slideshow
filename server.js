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

io.on('connection', function (socket) {
  socket.on('navigate', function (page) {
    io.emit('navigate', page);
  });
});
