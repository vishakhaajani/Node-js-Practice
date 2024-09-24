var fs = require('fs');

fs.rename('mynewfile1.txt', 'mynewfile5.txt', function (err) {
    if(err) throw err;
    console.log('File Rename..!');
})