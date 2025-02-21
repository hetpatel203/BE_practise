const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {    
    res.send('Hello World');
})

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "het",
        email: "het@gmail.com",
        username: "harsh"
    });
    res.send(createduser);
})

app.get('/update', async(req,res) => {
    let updateuser = await userModel.findOneAndUpdate({username: "harsh"}, {name:"het patel bhaveshbhai"}, {new:true})

    res.send(updateuser);
})

app.get('/read', async(req,res) => {
    // let users = await userModel.find({username: "harsh"});
    let users = await userModel.find();

    res.send(users);
})

app.get('/delete', async(req,res) => {
    let deleteuser = await userModel
    .findOneAndDelete({username: "het"});
    res.send(deleteuser);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})