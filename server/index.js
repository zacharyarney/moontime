const express = require('express');
const server = express();

server.use(express.json()); // middleware for parsing JSON

const httpServer = require('http').Server(server);
const io = require('socket.io')(httpServer);

io.on('connection', () => {
  console.log('user connected wowee')
})

httpServer.listen(5000, () => {
  console.log('\n===SERVER IS LISTENING ON 5000===\n');
})