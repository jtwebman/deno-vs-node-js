'use strict';

const http = require('http');

const port = 8000;

const server = http.createServer((req, res) => {
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
