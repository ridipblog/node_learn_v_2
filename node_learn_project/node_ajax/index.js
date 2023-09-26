const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const hbs = require('hbs');
app.set('view engine', 'hbs');
const encoded = bodyParser.urlencoded({
    extended: true
});
app.use(encoded);
app.use(bodyParser.json());
app.get('/registration', (req, res) => {
    res.render('registration');
});
app.post('/registration', encoded, async (req, res) => {
    var name = req.body.data;
    const data = `<h1>${name}</h1>`;
    res.send({
        data: data,
        status: 200
    })
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.post('/login', encoded, async (req, res) => {
    console.log(req.body);
    res.send({
        data: req.body
    })
})
app.listen(3000, () => {
    console.log("Server Starting");
});