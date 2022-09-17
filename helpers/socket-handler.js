const server = require('../bin/www');
const SocketIO = require('socket.io');

const io = SocketIO(server);

// WEBSOCKETS
io.on('connection', (socket) => {
    console.log(socket.id);
});