var nodemailer = require('nodemailer');

var transporter = nodemailer.transporter({
    Service: 'gmail',
    auth: {
        user: "vishakhaajani28@gmail.com",
        pass: "baluu28ajani"
    }
});

var mailoptions = {
    from: "vishakhaajani28@gmail.com",
    to: 'myfriend@yahoo.com',
    subject: 'sending email using node.js',
    text: 'that was easy!'
};

transporter.sendMail(mailoptions, function(error, info){
    if(error) {
        console.log(error); 
    }else{
        console.log('Email sent: ' + info.response);    
    }
});