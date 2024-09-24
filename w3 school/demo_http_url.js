var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url); // client url ma 8080 pachhi je write karse te show thase...
    res.end();
}).listen(8080);