const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;
//const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = require("dotenv")

const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../client")));

const GOOGLE_CLIENT_ID = '183570045165-gq0q3j0up3m6c26ahu8cfh56c20h3prc.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '8u5R2cOK_xvFmB5QYGvVxHQy'

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    () => {
      console.log("in middleware");
    },
    // function(accessToken, refreshToken, profile, done) {
    //      User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //        return done(err, user);
    //      });
    // }
    function(accessToken, refreshToken, profile, done) {
      return done(err, profile);
      
    },
  )
);

passport.serializeUser(function (user,done){
  done(null,user)
})

passport.deserializeUser(function (user,done){
  done(null,user)
})

app.get(
  "/auth/google",
  () => {
    console.log('in auth1');
  },
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  () => {
    console.log("in auth 2.0");
  },
  // passport.authenticate("google", { failureRedirect: "/login" }),
  // function (req, res) {
  //   res.redirect("/");
  // }
);

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
