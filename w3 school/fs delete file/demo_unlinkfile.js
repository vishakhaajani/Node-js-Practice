var fs = require('fs');

fs.unlink('mynewfile4.txt', function (err) { // for delete file...
    if(err) throw err;
    console.log('File Delete..!'); 
});