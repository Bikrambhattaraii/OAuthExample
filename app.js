const express = require("express");
const app = express();
require("./model/index");
require("dotenv").config();
const passport = require("passport");

//require ends here

//middleware
// app.use every rreequest ma execute huncha
app.set("view engine", "ejs");
app.use(passport.initialize()); // passport use garna lako vanne command yo
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user); //cb(error,success) --> cb(error)
});
passport.deserializeUser(function (obj, cb) {
  //desereliazer ma object huncha
  cb(null, obj);
});
//db connection
app.get("/", (req, res) => {
  res.render("home.ejs");
});
//google login
var userProfile;
let GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      userProfile = profile;
      return done(null, userProfile); // error or succes vo vane user profile pass garcha
      // teo data gayera serializer ma bascha
    }
  )
);
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }));
app.get("/auth/google/callback",passport.authenticate("google", {
    failureRedirect: "http://localhost:3000",
  }),
  function (req, res) {
    console.log(userProfile);
    res.send("logged in successfully");
    console.log("hello wrodl")
  }
);
// emd of google login

app.listen(3000, () => {
  console.log("NodeJs project has started at port 3000");
});
