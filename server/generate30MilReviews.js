const faker = require('faker');
const fs = require('fs');

let count = 1;

const dataReviews = (id) => {
 const abodeData = [];
 const date = faker.date.past();
 for (let i = 0; i < 3; i++) {
    const abodeid = id;
    const accuracy = Math.ceil(Math.random() * 5);
    const checkin = Math.ceil(Math.random() * 5);
    const cleanliness = Math.ceil(Math.random() * 5);
    const communication = Math.ceil(Math.random() * 5);
    const location = Math.ceil(Math.random() * 5);
    const reviewdate = date.toISOString();
    const reviewid = count;
    const reviewtext = faker.lorem.sentence();
    const username = faker.name.findName();
    const userphoto = faker.image.avatar();
    const value = Math.ceil(Math.random() * 5);
    const line = `${abodeid}|${accuracy}|${checkin}|${cleanliness}|${communication}|${location}|${reviewdate}|${reviewid}|${reviewtext}|${username}|${userphoto}|${value}\n`;
    abodeData.push(line);
    count++;
 }
 return abodeData;
}

const formatData = (data) => {
  let result = '';
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    result += element;
  }
  return result;
}

const writeDataReviews = () => {
  let stream = fs.createWriteStream('./dataReviews.csv');
  let i = 10000001;

  const write = () => {
    let ok = true;
    
    do {
      let abode = dataReviews(i); //array of 3 data pts
      abode = formatData(abode);
      if (i === 0) {
        stream.write(abode);
        stream.end();
      } else {
        ok = stream.write(abode);
      }
      i -= 1;
    } while (i > 0 && ok);
    if (i > 0) {
      stream.once('drain', write);
    }
  };
  write();
};
writeDataReviews();

/*
REVIEWS 
=============================================================PostgreSQL=====================================================|
reviewID| user_name|user_photo|review_text| accuracy|   comm   |  clean  |  loc    | check_in|  value  |review_date|abode_id|
-------|----------|----------|-------------------------------------------------------------------------------------|--------|
   1   |  lorem   |    url   |   lorem   |   INT    |   INT    |   INT   |   INT   |   INT   |   INT   |   date    |  INT   |
   2   |  lorem   |    url   |   lorem   |   INT    |   INT    |   INT   |   INT   |   INT   |   INT   |   date    |  INT   |
   3   |  lorem   |    url   |   lorem   |   INT    |   INT    |   INT   |   INT   |   INT   |   INT   |   date    |  INT   |
   4   |  lorem   |    url   |   lorem   |   INT    |   INT    |   INT   |   INT   |   INT   |   INT   |   date    |  INT   |
   5   |  lorem   |    url   |   lorem   |   INT    |   INT    |   INT   |   INT   |   INT   |   INT   |   date    |  INT   |
   6   |  lorem   |    url   |   lorem   |   INT    |   INT    |   INT   |   INT   |   INT   |   INT   |   date    |  INT   |
   7   |  lorem   |    url   |   lorem   |   INT    |   INT    |   INT   |   INT   |   INT   |   INT   |   date    |  INT   |
   8   |  lorem   |    url   |   lorem   |   INT    |   INT    |   INT   |   INT   |   INT   |   INT   |   date    |  INT   |
   9   |  lorem   |    url   |   lorem   |   INT    |   INT    |   INT   |   INT   |   INT   |   INT   |   date    |  INT   |
   10  |  lorem   |    url   |   lorem   |   INT    |   INT    |   INT   |   INT   |   INT   |   INT   |   date    |  INT   |
=============================================================================================================================
ReviewID - Primary Key*
*/