const http = require("http"); // package import

const port = 8081; // PORT Num

const toDoList = ["rohan", "rohit", "anil", "anup"];

http.createServer((request, response)=>{    //Creating a server
    const {method, url} = request;
    // console.log(method, url);        //              GET / -actual thing ;                 GET /favicon.ico -Ignore

    if(url === "/todos"){
        if(method === "GET"){
            response.writeHead(200);
            response.write(toDoList.toString())
        }else if (method === "POST"){
            let body = "";
            request.on('error',(err)=>{
                console.log(err);
            }).on('data',(chunk)=>{     //Chunks of Data
                body += chunk           //Apending 1 by 1
                console.log("chunk:", chunk)
            }).on('end',()=>{       //end on after handling Chunks of Data
                body = JSON.parse(body)
                console.log("body: ", body)
            })
        }
        
        else{
            response.writeHead(501);
        }
    }else if (url === "/"){
        
    }
    // response.writeHead(200, {"Content-Type": "text/html"});     //...200 incates successfull okay - These are different types of HTTPs status codes
    // response.write("<h1>Hello World! - Aakarsh Sharma   </h1>");
    response.end();     //It is Optional to write but a Good Practise is to write it here
})
.listen(port, ()=>{     //...Always listening to our Port Number
    console.log(`NodeJs server is up and running succesfully on port ${port}`)
})

// http://localhost:8081