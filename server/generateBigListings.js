
const faker = require('faker');
const fs = require('fs');

const reviewText = () => {
  let reviewParagraphsArr = [];
  const reviewLength = 1;
  for (let paragraphs = 0; paragraphs < reviewLength; paragraphs++) {
    reviewParagraphsArr.push(faker.lorem.paragraph());
  }
  return reviewParagraphsArr.join('\n');
};

const generateReviews = () => {
  const numOfReviews = Math.floor(Math.random() * 5);
  const reviews = [];
  for (let count = 0; count < numOfReviews; count++) {
    reviews.push({
      user_name: faker.name.findName(),
      user_photo: faker.image.avatar(),
      review_text: reviewText(),
      accuracy: Math.ceil(Math.random() * 5),
      communication: Math.ceil(Math.random() * 5),
      cleanliness: Math.ceil(Math.random() * 5),
      location: Math.ceil(Math.random() * 5),
      check_in: Math.ceil(Math.random() * 5),
      value: Math.ceil(Math.random() * 5),
      review_date: faker.date.past(),
    });
  }
  return reviews;
};
const listing = () => {
  const obj = {
    abode_id: 0,
    abode_name: faker.lorem.words(),
    reviews: generateReviews(),
  };
  return obj;
};

const writeData = () => {
  let stream = fs.createWriteStream('./data1.csv');
  let i = 10000000;

  const write = () => {
    let ok = true;
    do {
      if (i === 0) {
        const dataSet = listing();
        dataSet.abode_id = i;
        stream.write(JSON.stringify(dataSet));
        stream.end();
      } else {
        const dataSet = listing();
        dataSet.abode_id = i;
        ok = stream.write(`${JSON.stringify(dataSet)} \n`);
      }
      i -= 1;
    } while (i > 0 && ok);
    if (i > 0) {
      stream.once('drain', write);
    }
  };
  write();
};
writeData();
