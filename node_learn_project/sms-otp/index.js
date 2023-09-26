const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const env = require('dotenv');
env.config({ path: './config.env' });
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define a route to send SMS
app.get('/send-sms', (req, res) => {
    const toPhoneNumber = "+917002142698";
    const message = "Hello Coder ";

    client.messages
        .create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: toPhoneNumber,
        })
        .then((message) => {
            res.send('SMS sent successfully!');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Failed to send SMS.');
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
