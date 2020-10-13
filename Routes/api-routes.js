// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");





// Routes
// =============================================================
module.exports = function(app) {

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

