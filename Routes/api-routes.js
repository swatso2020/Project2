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

  
//serves the home html page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/home.html"));
  });

//get from database
function getRecipie () {
  connection.query("select * from whatscookin_db.favoriteMeals", function(err, res) {
    if (err) throw err;
      console.log("Here are all the departments");
                  console.table(res);  
                  
                             
  })    
 
  }

                                          
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

  // // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // // req.params.id
  // app.delete("/api/todos/:id", function(req, res) {
  //   console.log("Todo ID:");
  //   console.log(req)
  //   console.log(req.params.id);
  //   db.toDoList.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function() {
  //     res.end();
  //   });
  // });

  // // PUT route for updating todos. We can access the updated todo in req.body
  // app.put("/api/todos", function(req, res) {
  //   db.toDoList.editTodo(req.body, function(results) {
  //     res.json(results);
  //   });
  // });
}
