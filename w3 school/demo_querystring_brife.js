var url = require('url');

var adr = 'http://localhost:8080/?year=1999&month=january';

var q = url.parse(adr, true);

console.log(q.host); //localhost:8080
console.log(q.pathname); //default /
console.log(q.search); // ?year=1999&month=january

var qdata = q.query;
console.log(qdata.month); // january


