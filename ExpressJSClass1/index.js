const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/ExpressRoutes/index.html")
});

app.get('about-us', (req, res) =>{
    res.send("Hello, Welcome to the about us page. This page will give you details about this course")
});

app.get('/register', (req, res) =>{
    res.sendFile(__dirname + '/register.html')
});

app.post('/submit', (req, res) =>{
    const {fname, lname, email } = req.body
    res.send(`first name: ${fname}, lastname: ${lname}, Email:  ${email}`)
});

app.listen(2000, () =>{
    console.log('Server is running on http://localhost:2000')
});