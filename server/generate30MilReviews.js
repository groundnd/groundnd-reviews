const faker = require('faker');
const fs = require('fs');

const writeDataReviews = () => {
  let stream = fs.createWriteStream('./dataReviews1.csv');
  let i = 30000000;

  const write = () => {
    let ok = true;
    do {
      if (i === 0) {
        const reviewId = i;
        const userName = faker.name.findName();
        const userPhoto = faker.image.avatar();
        const reviewText = faker.lorem.sentence();
        const accuracy = Math.ceil(Math.random() * 5);
        const communication = Math.ceil(Math.random() * 5);
        const cleanliness = Math.ceil(Math.random() * 5);
        const location = Math.ceil(Math.random() * 5);
        const checkIn = Math.ceil(Math.random() * 5);
        const value = Math.ceil(Math.random() * 5);
        const reviewDate = faker.date.past();
        const abodeId = Math.ceil(Math.random() * 10000000);
        const line = `${reviewId}|${userName}|${userPhoto}|${reviewText}|${accuracy}|${communication}|${cleanliness}|${location}|${checkIn}|${value}|${reviewDate}|${abodeId}`;
        stream.write(line);
        stream.end();
      } else {
        const reviewId = i;
        const userName = faker.name.findName();
        const userPhoto = faker.image.avatar();
        const reviewText = faker.lorem.sentence();
        const accuracy = Math.ceil(Math.random() * 5);
        const communication = Math.ceil(Math.random() * 5);
        const cleanliness = Math.ceil(Math.random() * 5);
        const location = Math.ceil(Math.random() * 5);
        const checkIn = Math.ceil(Math.random() * 5);
        const value = Math.ceil(Math.random() * 5);
        const reviewDate = faker.date.past();
        const abodeId = Math.ceil(Math.random() * 10000000);
        const line = `${reviewId}|${userName}|${userPhoto}|${reviewText}|${accuracy}|${communication}|${cleanliness}|${location}|${checkIn}|${value}|${reviewDate}|${abodeId}`;
        ok = stream.write(`${line} \n`);
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