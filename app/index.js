/*This is the primary file for the api 
*/
// Dependancies 
const http = require("http");
const url = require("url");

//The server should respond to all the requests with a string 
//Create a server object by using the createServer() that will have a callback function that lstens to requests aka a calback function that is the request listener that has request and response as parameters

const server = http.createServer(function(req,res){
    //In the Request listener function 
    
    //Get the URL and parse it 
    var parsedUrl = url.parse(req.url,true); // This will return the entire url parameter 

    //Get the Pathe to the URL 
    var path = parsedUrl.pathname;
    var trimedPath  = path.replace(/^\/+|\/+$/g,'');// This trimes the url path form slashes on the left and write but not in the middle of the path

    //Get the HTTP method 
    var method = req.method.toLowerCase();


    //Send a response to the URl
    console.log(`Request is received  on this path ${path}  with this method "${method}"`)

    //Log the requests path
})

//Start the server and listen to a specific port number.
server.listen(3000,function(){
  console.log("The server is listening on port 3000")  
})


