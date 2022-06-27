const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;
const path = require("path");

const app = express();

//locally stored movie information in an array
let movies = [
  {
    isbn: "49559966",
    title: "Jaws",
    genre: "Horror",
    rating: "9",
  },
  {
    isbn: "79534266",
    title: "Green Mile",
    genre: "Thriller",
    rating: "9",
  },
  {
    isbn: "23949558",
    title: "Cats",
    genre: "Comedy",
    rating: "3",
  },
  {
    isbn: "55949938",
    title: "Indiana Jones",
    genre: "Thriller",
    rating: "8",
  },
];

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "views")));

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to thee World of Movies!");
});

app.get("/newmovie", (req, res) => {
  res.render("new-movie");
});

app.get("/viewmovies", (req, res) => {
  res.render("movie-list");
});
//Specific Routes
app.post("/movies", (req, res) => {
  const movie = req.body;
  console.log(movie);
  movies.push(movie);
  res.redirect("/viewmovies");
});

app.get("/movies", (req, res) => {
  res.json(movies);
});

//port listener
app.listen(port, (req, res) => {
  console.log(`Listening on Port ${port}`);
});
