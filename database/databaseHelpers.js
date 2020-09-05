const pgp = require('pg-promise')();
const { login } = require('./login.js');

const connStr = `postgres://${login.user}:${login.password}@${login.host}:${login.port}/${login.database}`;
const database = pgp(connStr);

module.exports.getImagesByRestaurantId = (id, callback) => {
  database.one(`SELECT * FROM images_by_restaurant WHERE id=${id};`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
};
