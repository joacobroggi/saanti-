const express = require('express');
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {

  res.render("home");
});
app.get("/home", function (req, res) {

    res.render("home");
  });

app.get("/canciones", function (req, res) {

    res.render("canciones");
  });

app.listen(process.env.PORT || 3000);