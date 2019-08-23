const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json()); // middleware for parsing JSON
server.use(cors());

const httpServer = require('http').Server(server);
const io = require('socket.io')(httpServer);

const messages = [
  {
    id: 1,
    user: 'User 1',
    timestamp: Date.now(),
    body: 'Hello this is message',
  },
  {
    id: 2,
    user: 'User 2',
    timestamp: Date.now(),
    body: 'Hello this is also message',
  },
  {
    id: 3,
    user: 'User 1',
    timestamp: Date.now(),
    body: 'Indeed',
  },
];

server.get('/', (req, res) => {
  res.status(200).json({ messages });
});

io.on('connection', () => {
  console.log('user connected wowee');
});

httpServer.listen(5000, () => {
  console.log('\n===SERVER IS LISTENING ON 5000===\n');
});
