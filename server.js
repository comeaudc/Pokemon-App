const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3003;
//Require pokemon DB
const pokemon = require('./models/pokemon');

app.listen(port, ()=> {
    console.log(`I am listening on port`, port);
});

app.get('/', (req, res) => {
    res.send(`Welcome to the Pokemon App!`)
})

app.get('/pokemon', (req, res) => {
    res.send(pokemon)
});