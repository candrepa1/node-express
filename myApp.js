require("dotenv").config();
var express = require("express");
var app = express();

console.log("Hello World");

app.get("/", (req, res) => {
	console.log(__dirname);
	res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
	let value = "Hello json";
	res.json({
		message:
			process.env.MESSAGE_STYLE === "uppercase" ? value.toUpperCase() : value,
	});
});

app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
