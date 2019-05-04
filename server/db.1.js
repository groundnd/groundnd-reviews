const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'Pha-LeNguyen',
//   host: '127.0.0.1',
//   database: 'api',
//   password: 'orange',
//   port: 5432,
//   idleTimeoutMillis: 30000,
// });
//127.0.0.1

const pool = new Pool({
  user: 'postgres',
  host: '18.221.88.27',
  database: 'api',
  password: 'orange',
  port: 5432,
  idleTimeoutMillis: 30000,
});
pool.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}


//run database on seaprate instance, to increase number of servers 
//change pool config 