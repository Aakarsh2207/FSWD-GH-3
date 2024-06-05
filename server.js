const http = require("http"); // package import

const port = 8081; // PORT Num

http.createServer((request, response)=>{    //Creating a server
    response.writeHead(200, {"Content-Type": "text/html"});     //...200 incates successfull okay - These are different types of HTTPs status codes
    response.write("<h1>Hello World! - Aakarsh Sharma   </h1>");
    response.end();     //It is Optional to write but a Good Practise is to write it here
})
.listen(port, ()=>{     //...Always listening to our Port Number
    console.log(`NodeJs server is up and running succesfully on port ${port}`)
})

// http://localhost:8081