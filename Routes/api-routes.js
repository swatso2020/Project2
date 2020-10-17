// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

const passport = require("../config/passport");

const chalk = require('chalk');

// Routes
// =============================================================
module.exports = function (app) {

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
    //res.json(response);
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
  app.get("/api/recipies", function (req, res) {
    db.favoriteMeal.findAll({}).then(function (results) {
      res.json(results);
    });
  });
  // //get favorite meals and recipies
  // app.get("/api/recipies", function(req, res) {
  //   db.favoriteMeal.findAll({}).then(function(results) {
  //     res.json(results);
  //   });
  // });



  // Post route for saving new recipie.
  app.post("/api/favRecipie", function (req, res) {
    console.log(chalk.bgBlue.yellow("New Recipie added to favorites:"));
    console.log(req.body);
    db.favoriteMeal.create({
      mealid: req.body.mealid,
      mealname: req.body.mealname,
      mealcategory: req.body.mealcategory,
      mealVideo: req.body.mealVideo,
      mealthumb:req.body.mealThumb,
      mealInstr:req.body.mealInstr,
      mealIngr1:req.body.mealIngr1,
      mealIngr2:req.body.mealIngr2,
      mealIngr3:req.body.mealIngr3,
      mealIngr4:req.body.mealIngr4,
      mealIngr5:req.body.mealIngr5,
      mealIngr6:req.body.mealIngr6,
      mealIngr7:req.body.mealIngr7,
      mealIngr8:req.body.mealIngr8,
      mealIngr9:req.body.mealIngr9,
      mealIngr10:req.body.mealIngr10,
      mealIngr11:req.body.mealIngr11,
      mealIngr12:req.body.mealIngr12,
      mealIngr13:req.body.mealIngr13,
      mealIngr14:req.body.mealIngr14,
      mealIngr15:req.body.mealIngr15,
      mealIngr16:req.body.mealIngr16,
      mealIngr17:req.body.mealIngr17,
      mealIngr18:req.body.mealIngr18,
      mealIngr19:req.body.mealIngr19,
      mealIngr20:req.body.mealIngr20,
    }).then(function(results) {
      res.json(results);
    });
  });



  //Select based on user value 
  app.post("/api/insertRecipie", function (req, res) {
    console.log(chalk.bgGreen.yellow("Here is your New Recipie:"));
    console.log(req.body);
    db.CustomMeal.create({
      mealname: req.body.mealname,
      mealcategory: req.body.mealcategory,
      mealInstr: req.body.mealInstr,
      mealIngr1: req.body.mealIngr1,
      mealIngr2: req.body.mealIngr2,
      mealIngr3: req.body.mealIngr3,
      mealIngr4: req.body.mealIngr4,
      mealIngr5: req.body.mealIngr5,
      mealIngr6: req.body.mealIngr6,
      mealIngr7: req.body.mealIngr7,
      mealIngr8: req.body.mealIngr8,
      mealIngr9: req.body.mealIngr9,
      mealIngr10: req.body.mealIngr10,
      mealIngr11: req.body.mealIngr11,
      mealIngr12: req.body.mealIngr12,
      mealIngr13: req.body.mealIngr13,
      mealIngr14: req.body.mealIngr14,
      mealIngr15: req.body.mealIngr15,
      mealIngr16: req.body.mealIngr16,
      mealIngr17: req.body.mealIngr17,
      mealIngr18: req.body.mealIngr18,
      mealIngr19: req.body.mealIngr19,
      mealIngr19: req.body.mealIngr20,
      measure1: req.body.measure1,
      measure2: req.body.measure2,
      measure3: req.body.measure3,
      measure4: req.body.measure4,
      measure5: req.body.measure5,
      measure6: req.body.measure6,
      measure7: req.body.measure7,
      measure8: req.body.measure8,
      measure9: req.body.measure9,
      measure10: req.body.measure10,
      measure11: req.body.measure11,
      measure12: req.body.measure12,
      measure13: req.body.measure13,
      measure14: req.body.measure14,
      measure15: req.body.measure15,
      measure16: req.body.measure16,
      measure17: req.body.measure17,
      measure18: req.body.measure18,
      measure19: req.body.measure19,
      measure20: req.body.measure20,
    })
  });


  //Testing user review 
  app.post("/api/test", function (req, res) {
    console.log(req.body)
    db.favoriteMeal.create({ mealRev: req.body.mealRev }).then(function (results) {
      res.json(results);
    });
  });

  // app.get("/api/test", function(req, res) {
  //   console.log(req.body)
  //   db.favoriteMeal.findAll({where:{mealIngr1 = "butter"}}).then(function(results) {
  //     res.json(results);
  //   });
  // });

  

 

};


