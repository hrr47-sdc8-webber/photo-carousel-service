const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('./database/database.js');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/:id', express.static('public'));

// CRUD API ROUTES

// 'C'reate
app.post('/api/photos/', (req, res) => {
  db.insertRestaurantListing(req.body.name, req.body.images, res);
});

// 'R'ead
app.get('/api/photos/:restaurantID', (req, res) => {
  db.retrieveImages(req.params.restaurantID, req, res);
});

// 'U'pdate
app.put('/api/photos/:restaurantID', (req, res) => {
  db.updateRestaurantImagesFromId(req.body.Image_id, req.body.Image, res);
});

// 'D'elete
app.delete('/api/photos/:restaurantID', (req, res) => {
  console.log(req.body.id);
  db.deleteRestaurantFromId(req.body.id, res);
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
