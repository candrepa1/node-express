var express = require("express");
var app = express();

console.log("Hello World");

app.get("/", (req, res) => {
	console.log(__dirname);
	res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
