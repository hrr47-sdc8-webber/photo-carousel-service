/* eslint-disable no-await-in-loop */
/* eslint-disable no-loop-func */
const fs = require('file-system');
const { company, random } = require('faker');

const numPrimaryRecords = 10000000;

// writes n primary records to csv file (around 12x secondary records)
(async (n) => {
  const stream = await fs.createWriteStream('./data.csv');
  await stream.write('id|restaurantname|imageurl\n');
  for (let i = 1; i <= n; i += 1) {
    let imageUrlStr = '';
    for (let j = 0; j <= random.number({ min: 10, max: 15 }); j += 1) {
      imageUrlStr += `${random.number({ min: 1, max: 51 })},`;
    }
    imageUrlStr = imageUrlStr.slice(0, -1);
    let str = `${i}|${company.companyName(0)}|[${imageUrlStr}]\n`;
    if (i === n) {
      str = str.slice(0, -1);
    }
    if (!stream.write(str)) {
      await new Promise((resolve) => stream.once('drain', resolve));
    }
  }
  await stream.end();
})(numPrimaryRecords);
