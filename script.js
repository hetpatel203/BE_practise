// const fs = require('fs');

// const data = 
// fs.writeFile("data.txt", " me to hacha hu how are you.!", function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File created successfully");
//     }
// })

// fs.rename("data.txt", "data1.txt", function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File renamed successfully");
//     }
// })

// fs.unlink("data1.txt", function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File deleted successfully");
//     }
// })  

// const http = require('http');
// const server = http.createServer(function(req,res){
//     res.end("Hello World");
// })

// server.listen(3000, function(){
//     console.log("Server started at port 3000");
// })



const express = require('express');
const app = express();

////middleware
// app.use(function(req,res,next){
//     console.log("Middleware 1");
//     next();
// })

// app.use(function(req,res,next){
//     console.log("Middleware 2");
//     next();
// })

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/', function(req,res){
    res.send("Hello bhai..sab maze");
})
app.get('/profile', function(req,res){
    res.send("haan bhai..sab maze..tu bol");
})

app.listen(3000, function(){
    console.log("Server at port 3000");
})