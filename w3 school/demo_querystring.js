var http = require('http');
var url = require('url')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    res.write = q.year + " " + q.month; // client url ma je year and month write kare te show thase (e.x = http://localhost:8080/?year=1999&month=january)...
    res.end();
}).listen(8080);