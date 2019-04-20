const faker = require('faker');
const fs = require('fs');

const writeData = () => {
  let stream = fs.createWriteStream('./dataAbodes.csv');
  let i = 10000000;

  const write = () => {
    let ok = true;
    do {
      if (i === 0) {
        const abodeId = i;
        const abodeName = faker.lorem.words();
        const line = `${abodeId}|${abodeName}`;
        stream.write(line);
        stream.end();
      } else {
        const abodeId = i;
        const abodeName = faker.lorem.words();
        const line = `${abodeId}|${abodeName}`;
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
writeData();

/*
ABODES
 abode_id/PK| abodeName|
------------|----------|
    1       |   lorem  |
    2       |   lorem  |
    3       |   lorem  |
    4       |   lorem  |
    5       |   lorem  |
*/
