var http = require('http');

async function startServer () {

    const {lowarcase} = await import ('lower-case')

    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(lowarcase("HELLO WORLD..!"));
        res.end();
    }).listen(8080);
}

startServer();