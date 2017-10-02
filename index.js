let net = require('net');

let callback = (socket) => {
    // console.log(socket);
    socket.on('data', function (data) {
        console.log(data.toString());
        socket.end();
    });
};

net.createServer(callback).listen(6092);
net.createServer(callback).listen(6130);
net.createServer(callback).listen(6049);
net.createServer(callback).listen(6095);