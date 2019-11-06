const express = require('express');
const io = require('socket.io');
const http = require('http');
const ip = require('ip');

const app = express();
const server = http.createServer(app);
const ws = io.listen(server);

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

let count = 0;

ws.on('connection', (socket) => {

    console.log('client connected');

    ws.emit('echo', count);

    socket.on('send', () => {
        count = count + 1;
        ws.emit('echo', count);
    });
});

ws.on('disconnection', () => {
    console.log('client disconnected');
});

const PORT = process.env.PORT || 80;

server.listen(PORT, () => console.log(`App running on ${ip.address()}:${PORT}.`));
