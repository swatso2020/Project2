// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

const passport = require("../config/passport");



// Routes
// =============================================================
module.exports = function(app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  
 //get everything saved in database 
  app.get("/api/recipies", function(req, res) {
    db.favoriteMeal.findAll({}).then(function(results) {
      res.json(results);
    });
  });               


                                          
// POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/favRecipie", function(req, res) {
    console.log("New Recipie:");
    console.log(req.body);
    db.favoriteMeal.create({
      mealid: req.body.mealid,
      mealname: req.body.mealname,
      mealcategory: req.body.mealcategory,
      mealVideo: req.body.mealVideo,
      mealInstr:req.body.mealInstr
    }).then(function(results) {
      res.json(results);
    });
  });
};


