/* eslint-disable no-console */
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const db = require('../database/databaseHelpers.js');

const app = express();
const port = 3003;

app.use(cors());
app.use(express.json());
app.use('/:id', express.static('./public'));

// app.use('/api/photos/:id', createProxyMiddleware({
//   target: 'http://13.57.10.126:4003',
//   changeOrigin: true,
// }));

app.get('/api/photos/:id', (req, res) => {
  db.getImagesByRestaurantId(req.params.id, (err, data) => {
    if (err) {
      console.error(err.stack);
      res.status(501).send('Error retrieving data from server');
    } else {
      const imageUrlStrNums = JSON.parse(data.imageurl).map((num) => ((num < 10) ? `0${num}` : `${num}`));
      const photoArray = [];
      for (let i = 0; i < imageUrlStrNums.length; i += 1) {
        photoArray[i] = {
          Image_id: i + 1,
          Image_url: `https://photo-carousel-service.s3-us-west-1.amazonaws.com/img00${imageUrlStrNums[i]}.jpeg`,
        };
      }
      const obj = {
        photoArray,
        name: data.restaurantname,
      };
      res.status(200).send(obj);
    }
  });
});

app.get('/loaderio-790e82caeac41fa984d3c311bebf60cb/', (req, res) => {
  res.status(200).send('loaderio-790e82caeac41fa984d3c311bebf60cb');
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
