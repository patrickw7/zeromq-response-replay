const zmq = require("zeromq/v5-compat")
const socket = zmq.socket('req');     // REQuest socket

const address = 'tcp://127.0.0.1:3000';
const message = 'apple'

function runClient() {
  socket.connect(address);

  socket.on('message', function (msg) {            // When receive message
    console.log(`Response received: "${msg}"`);
    });
}

runClient()

function sendMessage (message) {
	socket.send(message);                            // Send request
}

sendMessage(message);