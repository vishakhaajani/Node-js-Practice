var fs = require('fs');

fs.appendFile('mynewfile1.txt', "Hello from vishakha..." , function (err) {
    if(err){
        return err;
    }
    console.log('saved...!');
})