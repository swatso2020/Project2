// *********************************************************************************
// html-routes.js - this file will server the htmls
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

const isAuthenticated = require("../config/middleware/isAuthenticated");
// Routes
// =============================================================
module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/assets/html/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/assets/html/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/html/members.html"));
  });

  //serves the home html page
  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/home.html"));
  });

  //This will serve the recipe html
  app.get("/recipe", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/recipe.html"));
  });

  //This will serve the contact html
  app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/contact.html"));
  });
}

