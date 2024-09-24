var fs = require('fs');

fs.open('mynewfile2.txt' , 'w' ,function (err, file) { //for create new empty file...
    if(err) throw err;
    console.log('saved...!'); 
});