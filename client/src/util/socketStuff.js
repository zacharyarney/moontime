import socketIOClient from 'socket.io-client';

const endpoint = 'http://localhost:5000';
const socket = socketIOClient(endpoint);

export { socket };