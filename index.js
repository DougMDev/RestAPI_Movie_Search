const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;
const path = require("path");

const app = express();

let movies = [];

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to thee World of Movies!");
});

app.get("/newmovie", (req, res) => {
  res.render("new-movie");
});
//Specific Routes
app.post("/movies", (req, res) => {
  const movie = req.body;
  console.log(movie);
  movies.push(movie);

  res.send("Movie has been added to the database");
});

//port listener
app.listen(port, (req, res) => {
  console.log(`Listening on Port ${port}`);
});
