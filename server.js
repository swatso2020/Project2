require("dotenv").config();
var express = require("express");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");
const cors = require('cors');
const session = require("express-session");
const passport = require("./config/passport");


// const allowedOrigins = [
//   'capacitor://localhost',
//   'http://localhost:8080',
//   'http://localhost:8080/api/favRecipie',
//   'ionic://localhost',
//   'http://localhost:3306',
//   'http://localhost:8080',
//   'http://localhost:8100',
//   `/https://www.themealdb.com/api/json/v1/1/random.php`

// ];

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)git 
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  }
}

// Enable preflight requests for all routes
// app.options('*', cors(corsOptions));

// app.get('/', cors(corsOptions), (req, res, next) => {
//   res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
// })



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
// Static directory
app.use(express.static('public'));
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);





db.sequelize.sync().then(function() {
    app.listen(PORT, 3306,function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT);
    });
  });
  
