const express = require('express');
const app = express();
const fs = require('fs');
const nodemailer = require('nodemailer');
app.get('/send_email', async (req, res) => {
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'memorytemp5@gmail.com',
            pass: 'dlkxgwyypbbupzus'
        },
        secure: true,
        tls: {
            rejectUnauthorized: true
        }
    });
    let mailDetails = {
        from: 'memorytemp5@gmail.com',
        to: 'ridipgoswami596@gmail.com',
        subject: 'Test Mail',
        text: "Node js esting Mail"
    }
    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("Sent");
        }
    })
    res.send("Mail Send");
});
app.get('/send_email_host', async (req, res) => {
    let mailTransporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'memorytemp5@gmail.com',
            pass: 'dlkxgwyypbbupzus'
        },
        secure: true,
        tls: {
            rejectUnauthorized: true
        }
    });
    let mailDetails = {
        from: 'memorytemp5@gmail.com',
        to: 'ridipgoswami596@gmail.com',
        subject: 'Test Mail',
        text: "Node js esting Mail"
    }
    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log("Sent");
        }
    })
    res.send("Mail Send");
})
app.get('/send_mail_image', async (req, res) => {

    let sender = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'memorytemp5@gmail.com',
            pass: 'dlkxgwyypbbupzus'
        }
    });

    let mail = {
        from: 'memorytemp5@gmail.com',
        to: 'ridipgoswami147@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
        html: '<h1>GeeksforGeeks</h1>< p > I love geeksforgeeks</p>',
        attachments: [{
            filename: 'mailtrap.png',
            path: __dirname + '/user.jpg',
            // cid: 'uniq-mailtrap.png'
        }]
    };

    sender.sendMail(mail, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent successfully: ' +
                info.response);
        }
    });
    res.send("Sent");

});
app.get('/send_mail_view', async (req, res) => {
    let sender = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'memorytemp5@gmail.com',
            pass: 'dlkxgwyypbbupzus'
        }
    });
    const emailView = fs.readFileSync('mail.html', 'utf8');
    let mail = {
        from: 'memorytemp5@gmail.com',
        to: 'ridipgoswami147@gmail.com',
        subject: 'Sending Email using Node.js',
        html: emailView,
    };
    sender.sendMail(mail, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent successfully: ' +
                info.response);
        }
    });
    res.send("Sent");
})
app.listen(3000)