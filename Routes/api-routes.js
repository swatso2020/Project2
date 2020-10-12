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
  //get favorite meals and recipies
  app.get("/api/recipies", function(req, res) {
    db.favoriteMeal.findAll({}).then(function(results) {
      res.json(results);
    });
  });


                                          
// Post route for saving new recipie.
  app.post("/api/favRecipie", function(req, res) {
    console.log("New Recipie:");
    console.log(req.body);
    db.favoriteMeal.create({
      mealid: req.body.mealid,
      mealname: req.body.mealname,
      mealcategory: req.body.mealcategory,
      mealVideo: req.body.mealVideo,
      //mealRev:req.body
    })

    db.CustomMeal.create({
      mealid: req.body.mealid,
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
      mealIngr19:req.body.strIngredient19,
      mealIngr19:req.body.strIngredient20
    }).then(function(results) {
      res.json(results);
    });
  });


  
  //Select based on user value 
  app.get("/api/getfavorites", function(req, res) {
    console.log(req.body)
    db.favoriteMeal.findAll({}).then(function(results) {
      res.json(results);
    });
  }); 
  
  
   //Testing user review 
   app.post("/api/test", function(req, res) {
    console.log(req.body)
    db.favoriteMeal.create({mealRev:req.body.mealRev}).then(function(results) {
      res.json(results);
    });
  });

};
