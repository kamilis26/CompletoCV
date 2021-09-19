//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const aboutContent = "Sou Camila, uma mulher jovem e apaixonada por entender como as coisas funcionam. Dona de cinco gatos, aprendi na prática a reparar coisas destruída por eles. Desde que me entendo por gente, estou sempre em busca de novos conhecimentos: colégio, faculdade, inglês, pós-graduação, softwares variados e atualmente linguagem de programação. Decidida a mudar de vida, resolvi escrever esse blog como uma forma de incentivar a mim mesma. Apesar de ser um objetivo pessoal, compartilhá-lo me ajuda manter a disciplina, além de interagir novas pessoas.";
const contactContent = "Para saber mais, me mande um e-mail, uma mensagem no Instagram ou LinkedIn.";

const app = express();

let posts = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", {
  });
  //console.log(posts);
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/contact", function (req, res) {
  res.render("contact", {contacKey: contactContent});
});

app.get("/main", function (req, res) {
  res.render("main");
});

app.get("/skill", function (req, res) {
  res.render("skill");
});

app.get("/work", function (req, res) {
  res.render("work");
});

app.get("/education", function (req, res) {
  res.render("education");
});

app.get("/course", function (req, res) {
  res.render("course");
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
