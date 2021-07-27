const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
require('dotenv').config();

let GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
let GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;


const { UserModel } = require("../models");


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
        console.log(profile)
        const name = profile.displayName.split(' ')[0];
        const username = profile.emails[0].value;
        const googleId = profile.id;
        let user = await UserModel.getUserByGoogleId(googleId);
        console.log('user',user.rows[0])
        if (!user.rows[0]){
          console.log('here')
          user = await UserModel.createUserWithGoogle(name,username,googleId);
        } 
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
