const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const app = express();
passport.use(new googleStrategy({
    clientID: "client_id",
    clientSecret: "client_secret",
    callbackURL: "/auth/google/callback"
}, (accessToken, refreshToekn, profile, done) => {
    console.log(accessToken);
    console.log(refreshToekn);
    console.log(profile);
}));

app.get('/', (req, res) => {
    res.send("Ok")
});
app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));
app.get('/auth/google/callback', passport.authenticate("google"));
app.listen(3000);
