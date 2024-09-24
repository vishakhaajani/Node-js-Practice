const http = require('http');

async function startServer() {
  const { upperCase } = await import('upper-case');

  http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(upperCase("Hello vishakha!"));
    res.end();
  }).listen(8080);
}

startServer();
