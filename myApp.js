require("dotenv").config();
const bodyParser = require("body-parser");
var express = require("express");
var app = express();

console.log("Hello World");

app.use((req, res, next) => {
	console.log(`${req.method} ${req.path} - ${req.ip}`);
	next();
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	console.log(__dirname);
	res.sendFile(__dirname + "/views/index.html");
});

app.get(
	"/now",
	(req, res, next) => {
		req.time = new Date().toString();
		next();
	},
	(req, res) => {
		res.json({ time: req.time });
	}
);

app.use("/name", bodyParser.urlencoded({ extended: false }));

app.post("/name", (req, res) => {
	const { first, last } = req.body;
	res.json({ name: `${first} ${last}` });
});

app.get("/:word/echo", (req, res) => {
	res.json({ echo: req.params.word });
});

app.get("/json", (req, res) => {
	let value = "Hello json";
	res.json({
		message:
			process.env.MESSAGE_STYLE === "uppercase" ? value.toUpperCase() : value,
	});
});

module.exports = app;
