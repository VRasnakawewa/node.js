var http = require("http");
http.createServer(function(req,res){
    res.end("Hello, world! Nodemon");
}).listen(8080);
console.log("Server is listening");
