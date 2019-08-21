var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json({limit: '10mb'}));

app.all("/", debugEndpoint);
app.all("/*", debugEndpoint);

app.listen(port, function(){
    console.log("App listening on port " + port);
});

function debugEndpoint(req, res){
    res.setHeader('Content-Type', 'application/json');
    
    var respDat = {
	   http_method: req.method,
	   headers: req.headers,
	   body: req.body
    };
    var respStr = JSON.stringify(respDat, null, 4);
    
    console.log(respDat);
    res.send(respStr, null, 4);
}
