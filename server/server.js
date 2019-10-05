const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json()); // middleware for parsing JSON
app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

const users = [];
const connections = [];
const messages = [];
let messageKey = 0;
//   {
//     id: 1,
//     user: 'User 1',
//     timestamp: Date.now(),
//     body: 'Hello this is message',
//   },
//   {
//     id: 2,
//     user: 'User 2',
//     timestamp: Date.now(),
//     body: 'Hello this is also message',
//   },
//   {
//     id: 3,
//     user: 'User 1',
//     timestamp: Date.now(),
//     body: 'Indeed',
//   },
// ];

app.get('/', (req, res) => {
  res.status(200).json({ messages });
});

io.on('connection', (socket) => {
  console.log('user connected wowee');
  socket.emit('connected', { hello: 'world' });
  socket.on('message', (data) => {
    console.log(data);
    messageKey++;
    data.id = messageKey;
    messages.push(data);
    socket.emit('messages', data);
    console.log('messages', messages);
  });
});

module.exports = server;
