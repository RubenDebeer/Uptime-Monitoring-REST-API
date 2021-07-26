/*This is the primary file for the api 
*/

// Dependancies 
const http = require("http");

//The server should respind to all the requests with a string 
//Create a server object by using the createServer() that will have a callback function that lstens to requests aka a calback function that is the request listener that has request and response as parameters

const server = http.createServer(function(req,res){
    res.end("Hello World\n");
})

//Start the server and listen to a specific port number.
server.listen(3000,function(){
  console.log("The server is listening on port 3000")  
})


