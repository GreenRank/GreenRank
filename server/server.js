const path = require("path");
const express = require("express");
const app = express();

// const apiRouter = require('./routes/api');
const { createAllTables } = require('./models/index')
const userRouter = require('./routes/userRouter');
const scoreRouter = require('./routes/scoreRouter')

const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

const PORT = 3000;
require("./routes/auth.js");



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../client")));

// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["email", "profile"] })
// );

// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/error' }),
//   function(req, res) {
//     res.redirect('/success');
//   });

// app.get("/success", (req, res) => {
//   res.send("made it!");
// });
// app.get("/error", (req, res) => {
//   res.send("failure");
// });

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, '../client')));

/**
 * define route handlers
 */
// app.use('/api', apiRouter);
// app.use('/', userRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));



app.use((err, req, res, next) => {
  console.log(err);
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
createAllTables()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}...`);
    });
});

module.exports = app;
