var express = require("express");
var bodyaParse = ("body-parse");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.listen(port,()=> console.log("listening on port %s",port ));