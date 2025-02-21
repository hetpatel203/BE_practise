const express = require('express');
const app = express();
const path = require('path');
const usermodel = require('./models/user');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    // res.send('Hello World');
    res.render('index.ejs');
})

app.get('/read' ,async(req, res)=>{
    let users = await usermodel.find();
    res.render('read.ejs', {users});
})

app.get('/delete/:id' ,async(req, res)=>{
    let users = await usermodel.findOneAndDelete({_id: req.params.id});
    res.redirect('/read');
})


app.post('/create' ,async(req, res)=>{
    let {name, email, image} = req.body;
    let createUser = await usermodel.create({
        name,
        email,
        image  
    });
    // res.send(createUser);
    res.redirect('/read');
})



app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})