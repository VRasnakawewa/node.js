var mod = require("./modules");
var http = require("http");
http.createServer(function(req,res){
    res.end("Hello, world!");
}).listen(8080);
console.log("Server is listening");
mod();
