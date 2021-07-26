const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client')));




const login = require('./routes/login.js');




app.use('/login', login);



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


app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));




app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});




app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
