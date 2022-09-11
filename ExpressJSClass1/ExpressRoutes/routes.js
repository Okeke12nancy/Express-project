const express = require('express');

const app = express()

app.get('/home', (req, res) => {
    res.send('Welcome to my Homepage')
});

app.get('/about-us', (req, res) => {
    res.send('Welcome to my About Page')
});

app.get('/register', (req, res) => {
    res.send('Welcome to my Register Page')
});




