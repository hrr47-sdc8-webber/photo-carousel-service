const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'zagat'
});

connection.connect();

const insertRestaurant = function (name, restaurantID) {
  let insertString = `INSERT into Restaurants (Restaurant_Name, Restaurant_id) values ('${name}', ${restaurantID})`;
  connection.query(insertString, (err, success) => {
    if (err) {
      throw err;
    }
  }
  )
};

const insertImage = function(imageURL, restaurantID) {
  let insertString = `INSERT into Images (Image_url, Restaurant_id) values ('${imageURL}', ${restaurantID})`;
  connection.query(insertString, (err, success) => {
    if (err) {
      throw err;
    }
  });
};

module.exports.insertRestaurant = insertRestaurant;
module.exports.insertImage = insertImage;