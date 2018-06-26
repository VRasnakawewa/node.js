var http = require("http");
http.createServer(function(req,res){
    res.end("Hello, world!");
    console.log("Server is listening");
}).listen(8080);
