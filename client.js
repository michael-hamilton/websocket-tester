import io from './node_modules/socket.io-client/dist/socket.io.js';

(() => {
    const socket = io();

    document.getElementById('send').addEventListener('click',() => {
       socket.emit('send');
    });

    socket.on('echo', (msg) => {
        console.log(msg);

        document.getElementById('readout').innerHTML = msg;
    });
})();
