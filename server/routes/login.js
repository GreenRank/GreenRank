const express = require('express');
const app = require('../server');
const router = express.Router();

var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;


passport.use(new GoogleStrategy({
    clientID:     '183570045165-gq0q3j0up3m6c26ahu8cfh56c20h3prc.apps.googleusercontent.com',
    clientSecret: '8u5R2cOK_xvFmB5QYGvVxHQy',
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    //TO DO: call to DB
  }
  ));

router.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

router.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));


module.exports = router;