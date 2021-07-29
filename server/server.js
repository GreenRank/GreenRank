const path = require("path");
const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();

const { createAllTables } = require('./models/index')
const scoreRouter = require('./routes/scoreRouter')
const authRouter = require("./routes/auth.js");
const logout = require('./routes/logout.js')
const PORT = 3000;

const passport = require("passport");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');


app.use('/auth/google', authRouter);
app.use('/postQuestionnaire',scoreRouter);
app.use('/logout',logout);


app.get('/', (req,res)=>{
   res.status(200).sendFile(path.resolve(__dirname,'../client/index.html'))
})

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


const host = "0.0.0.0"
const ports = process.env.PORT || 3000
createAllTables()
  .then(() => {
    app.listen(ports, () => {
      console.log(`Server listening on port: ${PORT}...`);
    });
});

module.exports = app;
