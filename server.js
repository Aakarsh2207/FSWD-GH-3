// Importing express
const express = require("express");

// Initilisation
const app = express();

// Application will gonna use only json formmatted data
app.use(express.json());

// PORT Num
const port = 8081;

const toDoList = ["rohan", "rohit", "anil", "anup", "12345"];

// http://localhost:8081/todos
app.get("/todos", (req, res) => {
    res.status(200).send(toDoList);
})

app.post("/todos", (req, res)=>{
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: "Data added successfully :-)"
    })
})

app.delete("/todos", (req, res)=>{
    const itemToDelete = req.body.item;

    toDoList.find((elem, i) => {
        if(elem == itemToDelete){
            toDoList.splice(i, 1);
        }
    })
    res.status(204).send({
        message: "Deleted Succesfully :-("
    })
})


app.all("/todos", (req, res)=>{
    res.status(501).send();
})


app.all("*", (req, res)=>{
    res.status(404).send();
})

app.listen(port, ()=>{
    console.log(`Express Server Application is up and running succesfully on port: ${port}` )
})