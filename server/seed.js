const faker = require(`faker`);
const db = require(`./database/database.js`);

// Generate records for 100 restaurants

for (let i = 1; i <= 100; i++) {
  // the value of i will be used as the restaurant id
  let restaurantName = faker.company.companyName();
  // replace single quote in restaurantName with two single quotes, otherwise mySql will error
  restaurantName = restaurantName.replace(/'/g, "''");
  db.insertRestaurant(restaurantName, i);
  const imageCount = Math.floor(10 + 8 * Math.random());
  let imageArray = [];
  for (let j = 0; j < imageCount; j++) {
    let imageNumber = Math.floor(49 * Math.random());
    while (imageArray.includes(imageNumber)) { // I want no duplicated images for a single restaurant
      imageNumber = Math.floor(49 * Math.random());
    }
    imageArray.push(imageNumber);
    let imageURL = `img00${imageNumber}.jpeg`;
    db.insertImage(imageURL, i);
  }
}