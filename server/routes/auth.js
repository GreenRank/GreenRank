const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const { UserModel } = require("../models");

const GOOGLE_CLIENT_ID =
  "183570045165-gq0q3j0up3m6c26ahu8cfh56c20h3prc.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "8u5R2cOK_xvFmB5QYGvVxHQy";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      //passReqToCallback: true
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        console.log(profile.id)
        let user = await UserModel.getUserByGoogleId(profile.id);
        console.log('user',user)
        if (!user) user = await UserModel.createUserWithGoogle(profile.id);
        return done(null, user);
      } catch (err) {
        
        return done(err);
      }
    }

    // function(accessToken, refreshToken, profile, done) {
    //     console.log(profile.id)
    //      return done(null, profile);
    //     //return done();
    // }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
