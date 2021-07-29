const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const express = require("express");
// require("dotenv").config();
const { UserModel } = require("../models");
const router = express.Router();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
let curUser;

router.get(
  "/",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  function (req, res) {
    console.log("curUser in server", curUser);
    res.cookie('greenRankCurrentUser0001',curUser.googleid)
    res.redirect('/');
  }
);
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8080/auth/google/callback",
      //passReqToCallback: true
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        const name = profile.displayName.split(" ")[0];
        const username = profile.emails[0].value;
        const googleId = profile.id;
        let user = await UserModel.getUserByGoogleId(googleId);
        if (!user.rows[0]) {
          console.log('user not found, adding user')
          await UserModel.createUserWithGoogle(name, username, googleId);
          user = await UserModel.getUserByGoogleId(googleId);
        }
        curUser = user.rows[0];
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

module.exports = router;
