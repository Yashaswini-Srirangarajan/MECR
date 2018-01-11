//http = require('http');

var express = require("express");
var app     = express();
var path = require("path");

app.use('/',express.static(__dirname + '\\View\\'));
console.log(__dirname + '\\View\\')
//Store all HTML files in view folder.
//app.use('/',express.static(__dirname + '/Scripts'));
//Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/View/sampleHtml.html'));
  //__dirname : It will resolve to your project folder.
});



app.listen(8000);

// Console will print the message
console.log('Server running at http://127.0.0.1:8000/');
//console.log(__dirname + '/View/')