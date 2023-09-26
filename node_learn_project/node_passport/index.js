const express = require('express');
const app = express();
const hbs = require('hbs');
const passport = require('passport');
const expressSession = require('express-session');
const db = require('./models/conn');
const { initializePassport } = require('./passportConifg');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected");
}).catch(err => {
    console.log("connection Error");
})
const User = db.users;
initializePassport(passport);
app.use(expressSession({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", async (req, res) => {
    res.render("index");
});
app.get("/login", async (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/profile');
    }
    res.render("login");
});
app.get("/register", async (req, res) => {
    res.render("register");
});
app.post("/register", async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
        return res.status(400).send("User Alerady Exists !");
    }
    const newUser = await User.create(req.body);
    res.status(201).send(newUser);
});
app.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), async (req, res) => {
    res.redirect('/profile');
});
app.get('/profile', async (req, res) => {
    if (req.isAuthenticated()) {
        console.log(req.user);
        res.render('profile');
    }
    else {
        res.redirect('/login');
    }
});
app.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server Running")
})