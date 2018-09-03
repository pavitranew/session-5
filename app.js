const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const mongoose = require('mongoose');
const recipeModels = require('./api/recipe.model');
const recipes = require('./api/recipe.controllers');


const mongoUri = 'mongodb://dbuser_root:justletmein1@ds139632.mlab.com:39632/recipes-pshaw';


app.use(bodyParser.json());
app.use(express.static('static'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/recipes', function(req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/recipes/:id', function(req, res) {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/api/recipes', recipes.findAll);
app.get('/api/recipes/:id', recipes.findById);
app.post('/api/recipes', recipes.add);
app.put('/api/recipes/:id', recipes.update);
app.delete('/api/recipes/:id', recipes.delete);

app.get('/api/import', recipes.import);
app.get('/api/killall', recipes.killall);

mongoose.connect(mongoUri, { useNewUrlParser: true });

app.listen(3001);
console.log('Server running at http://localhost:3001/');