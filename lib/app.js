const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    switch(request.path) {
      case '/':
        socket.end(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));
        break;
      case '/echo':
        socket.end(createResponse({ body: request.body, status: '200 OK', contentType: 'text/plain' }));
        break;
      case '/red':
        socket.end(createResponse({ body: '<h1>red</h1>', status: '200 OK', contentType: 'text/html' }));
        break;
      case '/green':
        socket.end(createResponse({ body: '<h1>green</h1>', status: '200 OK', contentType: 'text/html' }));
        break;
      case '/blue':
        socket.end(createResponse({ body: '<h1>blue</h1>', status: '200 OK', contentType: 'text/html' }));
        break;
      default:
        socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }

    
  });
});

module.exports = app;
