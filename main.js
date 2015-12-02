var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.all("/", function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    http_method: req.method,
    headers: req.headers,
    body: req.body
  }, null, 4));
});

app.listen(port, function(){
  console.log("App listening on port " + port);
});
