var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
