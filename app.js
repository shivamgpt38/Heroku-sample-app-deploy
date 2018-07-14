//Importing the modules
const express = require("express");
const app     = express();
const path    = require("path");

//assigning the public directory 
app.use('/public', express.static(__dirname + "/Public"));

//Route for the app
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/View/Success.html'));
  })
//App port
const port = process.env.PORT || 3000;

//starting the server
app.listen(port);

console.log("Running at Port 3000");