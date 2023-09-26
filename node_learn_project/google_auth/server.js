const express = require('express');
const passport = require('passport');
const session = require('express-session');
const googleStrategy = require('passport-google-oauth20');
const app = express();
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}));
passport.use(new googleStrategy({
    clientID: "client_id",
    clientSecret: "client_secret",
    callbackURL: "/auth/google/callback"
}, (accessToken, refreshToekn, profile, done) => {
    // if user eleary exits in your database loginn otherwise 
    // save the user and signup
    // console.log(profile);
    return done(null, profile); //(err,user)
}));

passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile']
}));
app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/login'
}), (req, res, next) => {
    // console.log(req.user, req.isAuthenticated());
    console.log(req.user.displayName);
    res.redirect('/home');
});
app.get('/', (req, res, next) => {
    if (req.isAuthenticated()) {
        res.redirect('/home');
    } else {
        res.send("Index Page");
    }
})
app.get('/home', (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log(req.user);
        res.send("Home Page");
    } else {
        res.redirect('/');
    }
});
app.get('https://accounts.google.com/logout', (req, res, next) => {
    // req.session.destroy();
    req.logout();
    res.redirect('/');
    console.log(req.isAuthenticated());
});
app.get('/logout', (req, res, next) => {
    req.session.destroy();
    res.redirect('/');
    console.log(req.isAuthenticated());
});
app.listen(3000);
