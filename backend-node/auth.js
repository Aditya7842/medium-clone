const express = require('express');
const passport = require('passport');
const app = express();
const port = 3000;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const clientID = require('../config/googleData.cjs').clientId;
const clientSecret = require('../config/googleData.cjs').clientSecret;
const session = require('express-session');
const cors = require('cors');

app.use(session({secret: 'thisismysecret', resave: true, saveUninitialized: true}));
app.use(cors());



passport.use(new GoogleStrategy({
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: '/google/callback' 
  },
  (accessToken, refreshToken, profile, done) => {
    
    return done(null, profile);
  }
));
app.get('/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);


app.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/home');
  }
);

app.get('/home', (req, res) => {
    res.send("Welcome google user");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})

passport.serializeUser((user, done) => {
    done(null, user.id); 
});

passport.deserializeUser((id, done) => {

    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
  