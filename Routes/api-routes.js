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

//   app.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast", function(req, res) {
//  console.log(res)
//   });

  
  
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
  
                                $.ajax({
                                        url: queryURL,
                                        method: "GET"
                                        })
                                .then(function(response) {
                                       console.log(response)
                                })
                                          
  // // POST route for saving a new todo. We can create a todo using the data on req.body
  // app.post("/api/todos", function(req, res) {
  //   console.log("toDo Item:");
  //   console.log(req.body);
  //   db.toDoList.create({
  //     text: req.body.text,
  //     complete: req.body.complete,
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });

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
