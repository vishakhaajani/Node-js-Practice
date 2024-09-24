var http = require('http');

async function startServer () {

    const { lowerCase } = await import('lower-case'); // Corrected the import

    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(lowerCase("HELLO VISHAKHA..!")); // Corrected function name
        res.end();
    }).listen(8080);
}

startServer();
