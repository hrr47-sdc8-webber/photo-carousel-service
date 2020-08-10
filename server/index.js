const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database/database.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/:id', express.static('public'));

// API ROUTES
app.get('/:id/api/photos/:restaurantID', (req, res) => {
  db.retrieveImages(req.params.restaurantID, req, res);
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
