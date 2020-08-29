/* eslint-disable no-await-in-loop */
/* eslint-disable no-loop-func */
const fs = require('file-system');
const { company, random } = require('faker');

const numPrimaryRecords = 10000000;

// writes n primary records to csv file (around 12x secondary records)
(async (n) => {
  const stream = await fs.createWriteStream('./data.csv');
  await stream.write('restaurantId,name,imageId,imageUrl');
  let imgId = 1;
  for (let i = 1; i <= n; i += 1) {
    const nextImgId = imgId + random.number({ min: 10, max: 15 });
    let str = '';
    for (let j = imgId; j <= nextImgId; j += 1) {
      const imgUrlNum = random.number({ min: 1, max: 51 });
      str += `${i},${company.companyName(0)},${j},${`img00${(imgUrlNum < 10) ? `0${imgUrlNum}` : `${imgUrlNum}`}.jpeg\n`}`;
    }
    if (!stream.write(str)) {
      await new Promise((resolve) => stream.once('drain', resolve));
    }
    imgId = nextImgId + 1;
  }
  await stream.end();
})(numPrimaryRecords);
