const faker = require(`faker`);
const db = require(`./database/database.js`);

// Generate records for 100 restaurants

for (let i = 1; i <= 100; i++) {
  // the value of i will be used as the restaurant id
  let restaurantName = faker.company.companyName();
  restaurantName = restaurantName.replace(/'/g, "''");
  // replace single quote in restaurantName with two single quotes, otherwise mySql will error
  db.insertRestaurant(restaurantName, i);
  // restaurantName must be inserted first due to foreign key restraints
  const imageCount = Math.floor(10 + 8 * Math.random());
  // Each restaurant will have between 10 and 18 images. The exact number within this range is randomly selected.
  for (let j = 0; j < imageCount; j++) {
    let imageNumber = Math.floor(49 * Math.random());
    let imageURL = `img00${imageNumber}.jpeg`;
    db.insertImage(imageURL, i);
  }
}
return;