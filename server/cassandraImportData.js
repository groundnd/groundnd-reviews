// const cassandra = require('cassandra-driver');
// const client = new cassandra.Client({
//   contactPoints: ['localhost'],
//   localDataCenter: 'datacenter1',
//   keyspace: 'groundnd'
// });

// const tableQuery = 'CREATE TABLE groundnd.reviews (abodeid int, accuracy int, checkin int, cleanliness int, communication int, location int, reviewdate text, reviewid int, reviewtext text, username text, userphoto text, value int, PRIMARY KEY (abodeid, reviewid));';
// client.execute(tableQuery)
//   .then(() => {
//     console.log('yay');
//     process.exit();
//   });
