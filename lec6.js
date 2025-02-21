
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', function(req,res){
    res.send("Hello bhai..sab maze");
})

// app.get("/profile/:username", function(req,res){
//     res.send("haan bhai..sab maze..tu bol");
// })

app.get("/profile/:username", function(req,res){
    res.send("haan bhai..sab maze..tu bol");
})

app.get("/author/:name/:age", function(req,res){
    res.send(`Author name is ${req.params.name} and age is ${req.params.age}`);
    res.send(req.params);
})

app.listen(3000, function(){
    console.log("Server at port 3000");
})