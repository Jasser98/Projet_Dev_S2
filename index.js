const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true})); //chaque fois que nous transmettons une valeur dans l'URL, nous allons l'obtenir a partir d'ici l'encodeur d'URL et l'etendre a true
app.use(express.json());



module.exports = app;