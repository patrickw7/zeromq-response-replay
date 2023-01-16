const zmq = require("zeromq/v5-compat")
const socket = zmq.socket('rep');  // Response socket

const address = 'tcp://127.0.0.1:3000';
const list = ['apple', 'banana', 'pineapple', 'melon', 'mango']


function runServer() {
  socket.bind(address);    // listening at ..1:3000

  socket.on('message', function (msg) {         // on message
    const message = msg.toString();
    console.log(`Received '${message}'. Responding...`);

    list.filter((item) => item === message ? socket.send(message) : socket.send('Not found'))    // send something back
  });
}

runServer()