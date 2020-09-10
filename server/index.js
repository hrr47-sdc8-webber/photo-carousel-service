require('newrelic');
/* eslint-disable no-console */
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const port = 3003;

app.use(cors());
app.use(express.json());
app.use('/:id', express.static('./public'));
app.use(express.static('./public'));

app.use('/api/photos/:id', createProxyMiddleware({
  target: 'http://13.57.10.126:4003',
  changeOrigin: true,
}));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
