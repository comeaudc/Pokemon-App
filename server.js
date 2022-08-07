const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3003;
const mongoose = require("mongoose"); // Require Mongooose
const Pokemon = require("./models/pokemon"); //Require pokemon DB
const methodOverride = require("method-override"); //Add method override
const pokemonData = require("./utilities/pokemonData");

//DB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//Middleware
app.use((req, res, next) => {
  console.log(`I run for all routes`);
  next();
});
app.use(methodOverride("_method")); //Sets up methodoverride for use

//Setting up views
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`I am listening on port`, port);
});

//Our seed route
app.get("/pokemon/seed", (req, res) => {
  //Comment below line if you don't want to delete your whole entire collection
  // Not currently working
  // Pokemon.deleteMany({})

  //Create a list of pokemon into our database
  Pokemon.create(pokemonData);
  res.redirect("/pokemon");
});

// Home page
app.get("/", (req, res) => {
  res.render("Home");
});

//Index page
app.get("/pokemon", (req, res) => {
  Pokemon.find({}, (error, allPokemon) => {
    res.render("Index", {
      pokemon: allPokemon,
    });
  });
});

//Create pokemon page
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

//Create pokemon POST route
app.post("/pokemon/", (req, res) => {
  //Data manipulation
  let name = req.body.name.split("");
  name[0] = name[0].toUpperCase();
  req.body.name = name.join("");

  Pokemon.create(req.body, (err, createdPokemon) => {
    res.redirect("/pokemon");
    //    res.send(createdPokemon);
  });
});
//Show route
app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render("Show", {
      pokemon: foundPokemon,
    });
  });
});

//Delete Route
app.delete("/pokemon/:id", (req, res) => {
  //First arg is ID we want to delet, 2nd arg is callback function
  Pokemon.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/pokemon");
  });
});

// Render Edit Page
app.get("/pokemon/:id/edit", (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    if (!err) {
      res.render("Edit", {
        pokemon: foundPokemon,
      });
    } else {
      res.send({
        msg: err.message,
      });
    }
  });
});

//Put new information in DB
app.put("/pokemon/:id", (req, res) => {
  Pokemon.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
    (error, pokemon) => {
      res.redirect(`/pokemon/${req.params.id}`);
    }
  );
});
