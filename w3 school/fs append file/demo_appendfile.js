var fs = require('fs');

fs.appendFile('mynewfile1.txt', "Hello from vishakha..." , function (err) {  //for create file...
    if(err) throw err;
    console.log('saved...!');
})