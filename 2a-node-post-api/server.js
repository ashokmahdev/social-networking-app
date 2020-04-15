//================================================================================================

//Lets create a single javascript file and convert that to server

// Run node server.js - blank file - as you have isntalled node you can run any javascript file . As the file is blank nothing will happen

//lets add a simple code and execute this - this is still not a server , it is not processing any request from any client
//console.log("Hello World");

//================================================================================================

//================================================================================================
// lets convert this to a server
// import http package which has create server method
//const http = require("http");
//This takes ES6 arrow function
// http.createServer((req, res) => {
//   res.end("This is my first response");
// });
//================================================================================================

//================================================================================================
// create a server variable
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("This is my first response");
// });

// // listen at a port
// server.listen(5001);
//================================================================================================

// listen at a port provided by runtime , runtime can inject port number
//server.listen(process.env.PORT || 5000);

//================================================================================================
// As server needs to listen to http request and understand GET, POST, PATCH, DELTE request verbs and parse request data, we need to write a lot of code in nodejs to achieve this
// This is made easy by using another package called express
// Let’s listen to the client request using express package

// var express = require("express");
// var app = new express();
// var port = 5000;
// app.get("/", function (req, res) {
//   res.send("Hello world");
// });

// app.listen(port, function () {
//   console.log("Running on port" + port);
// });
//================================================================================================
//const debug = require("debug")("node-angular");

const http = require("http");
const app = require("./src/app");

const port = process.env.PORT || "5000";
app.set("port", port);

const server = http.createServer(app);
server.listen(port);
