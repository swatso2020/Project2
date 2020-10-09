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

//api will post favorites  to the database
  app.post("/api/favrecipies", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    // the body had sample data
    //     opens the json file and holds it in the data variable. Error variable will catch the errors
        fs.readFileSync(__dirname +"/db/db.json", "utf8",function(error, data){
            storedMeals = JSON.parse(data)
             if (error) {
                  return console.log(error);
                }
        })        
                //stores data from the body of the browser or postman request
                var newMeals = req.body;

                //set id for new notes
                let uniqueID = (storedMeals.length).toString();
                newNote.id = uniqueID;

                   //prints newly added note to the node cli
                    console.log("this is the note you added db.json. Content  ")
                    console.log(newMeals);

                // We then display the JSON to the users
                    res.json(storedNotes);
                //pushes the new note from postman body or user input
                storedNotes.push(newNote)
                console.log(storedMeals)

                
                stringArray = JSON.stringify(storedMeals)
                console.log(stringArray)
                fs.writeFile(__dirname +"/db/db.json",stringArray, "utf8", function(error, data) {
                    if (error) {
                          return console.log(error);
                        }
                    }); 
                  })
                

//   app.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast", function(req, res) {
//  console.log(res)
//   });

  
  
  
                                          
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
