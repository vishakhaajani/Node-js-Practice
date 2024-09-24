var fs = require('fs');

fs.writeFile('mynewfile3', 'hello from vishakha ajani..!', function(err) { // for replace file...
    if(err) throw err;
    console.log('Saved..!');  
})