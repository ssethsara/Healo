var express=require('express');
var nodemailer = require("nodemailer");
var app=express();

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "",
        pass: ""
    }
});

router.post('/', (req, res) => {
  res.send('emailComm works fine');
});

app.get('/send',function(req,res){
        var message = {
            from: 'sender@server.com',
            to: 'receiver@sender.com',
            subject: 'Message title',
            text: 'Plaintext version of the message',
            html: '<p>HTML version of the message</p>'
    };
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});

/*--------------------Routing Over----------------------------*/


