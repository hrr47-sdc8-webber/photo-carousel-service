const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'zagatPhotoCarousel',
});

connection.connect();

const insertRestaurant = (name) => {
  const insertString = `INSERT into Restaurants (Restaurant_Name) values ("${name}")`;
  connection.query(insertString, (err) => {
    if (err) {
      throw err;
    }
    console.log('Entered ', name, 'into database');
    return name;
  });
};

const insertImage = (imageURL, restaurantID) => {
  const insertString = `INSERT into Images (Image_url, Restaurant_id) values ('${imageURL}', '${restaurantID}')`;
  connection.query(insertString, (err) => {
    if (err) {
      throw err;
    }
  });
};

const updateRestaurantImagesFromId = (Image_id, Image, res) => {
  const insertString = `UPDATE Images SET Image_url = '${Image}' WHERE Image_id = ${Image_id};`;
  connection.query(insertString, (err, results) => {
    if (err) {
      res.status(501).send(`Error updating database: ${err}`);
    } else {
      res.status(200).send(`Successfully updated database: ${results}`);
    }
  });
};

async function insertRestaurantListing(name, images, res) {
  await insertRestaurant(name);
  connection.query(`SELECT Restaurant_id FROM Restaurants WHERE Restaurant_Name='${name}';`, (err, result) => {
    if (err) {
      res.status(501).send(`Error inserting into database: ${err}`);
    } else {
      const restId = result[0].Restaurant_id;
      for (let i = 0; i < images.length; i++) {
        insertImage(images[i], restId);
      }
      res.status(200).send('Inserted into database');
    }
  });
};

const deleteRestaurantFromId = (restaurantId, res) => {
  const imagesDeleteString = `DELETE FROM Images WHERE Restaurant_id=${restaurantId};`;
  connection.query(imagesDeleteString, (errImages) => {
    if (errImages) {
      res.status(501).send(`Error deleting images from database: ${errImages}`);
    } else {
      const restaurantDeleteString = `DELETE FROM Restaurants WHERE Restaurant_id=${restaurantId};`;
      connection.query(restaurantDeleteString, (errRest) => {
        if (errRest) {
          res.status(501).send(`Error deleting restaurantfrom database: ${errImages}`);
        } else {
          res.status(200).send('Successfully deleted from database');
        }
      });
    }
  });
};

const retrieveImages = function retrieveImagesByRestaurantId(restaurantID, req, res) {
  const responseData = {};
  const retrieveString = `SELECT Image_url FROM Images WHERE Restaurant_id = ${restaurantID}`;
  connection.query(retrieveString, (photoErr, result) => {
    if (photoErr) {
      res.send('Photos not found for that restaurant');
      // I'll update error handling once I decide what my front end should do in this situation
      return;
    }
    // lint doesn't like it if you try to assign new values to result directly (no-param-reassign)
    const s3Prefix = 'https://photo-carousel-service.s3-us-west-1.amazonaws.com/';
    const photoArray = result;
    for (let i = 0; i < photoArray.length; i += 1) {
      photoArray[i].Image_id = i + 1;
      photoArray[i].Image_url = s3Prefix.concat(photoArray[i].Image_url);
    }
    responseData.photoArray = photoArray;
    const retrieveNameString = `SELECT Restaurant_Name from Restaurants WHERE Restaurant_id = ${restaurantID}`;
    connection.query(retrieveNameString, (nameErr, name) => {
      if (nameErr) {
        res.send('Error retrieving restaurant name');
        return;
      }
      responseData.name = name[0].Restaurant_Name;
      res.send(responseData);
    });
  });
};

module.exports.insertRestaurant = insertRestaurant;
module.exports.insertImage = insertImage;
module.exports.retrieveImages = retrieveImages;
module.exports.updateRestaurantImagesFromId = updateRestaurantImagesFromId;
module.exports.insertRestaurantListing = insertRestaurantListing;
module.exports.deleteRestaurantFromId = deleteRestaurantFromId;
