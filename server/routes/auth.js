const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const GOOGLE_CLIENT_ID =
  "183570045165-gq0q3j0up3m6c26ahu8cfh56c20h3prc.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "8u5R2cOK_xvFmB5QYGvVxHQy";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    // function(accessToken, refreshToken, profile, done) {
    //      User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //        return done(err, user);
    //      });
    // }

    //^^ this will be where we check if the user exists already in the DB

    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      return done(err, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
