var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var winston = require("winston");
var app = express();

winston.add(winston.transports.File, { filename: 'Log.log' });

app.use(bodyParser.json());


app.post("/", function(req, res){
  var date = Date.now();
  var fileName = "POST.json";

  console.log("POST / @" + date);

  fs.writeFile(fileName, JSON.stringify({ "HEADERS": req.headers, "BODY": req.body}, undefined, 2), function fileWriteComplete(err){
    if(err){
      console.log("     Error writing to file " + err);
    } else{
      console.log("     File saved " + fileName);
      winston.log("info", req);
    }
  });

  res.send("Ok");
});


app.listen(3000, function(){
  console.log("App listening on port 3000");
});
