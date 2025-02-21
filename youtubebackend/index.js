const express = require('express');
const app = express();
const path = require('path'); 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');  


// app.use(function(req,res,next){
//     console.log("Middleware 1");
//     next();
// })

app.get('/', function(req,res){
    res.render("index");
})

app.listen(3001,function(){
    console.log("Server at port 3001");
});