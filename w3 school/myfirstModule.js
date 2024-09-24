var http = require('http');
var dt = require('./myfirstModule'); // include module 1...
var sum = require('./myfirstModule'); // include module 2...

exports.myDateTime = function () { // module create byself 1...
    return Date();
  };

exports.mySum = function () { // module create byself 2...
    return 5 + 3;
}


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The sum of 5 + 3 = " + sum.mySum());  //use module 2...
    res.end();
}).listen(8080);