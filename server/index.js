const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const db = require('../database-mysql');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

// API ROUTES

app.listen(port, () => {
});
