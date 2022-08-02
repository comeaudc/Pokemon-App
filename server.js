const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3003;
//Require pokemon DB
const pokemon = require('./models/pokemon');

//Setting up views
app.set('view engine', "jsx");
app.engine('jsx', require('express-react-views').createEngine());

app.listen(port, ()=> {
    console.log(`I am listening on port`, port);
});

app.get('/', (req, res) => {
    res.send(`Welcome to the Pokemon App!`)
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokemon})
});

app.get('/pokemon/:id', (req, res) =>{
   res.render("Show", {
    mons: pokemon[req.params.id]
   }); 
});