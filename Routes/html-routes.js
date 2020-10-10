// *********************************************************************************
// html-routes.js - this file will server the htmls
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  
//serves the home html page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/home.html"));
  });

}