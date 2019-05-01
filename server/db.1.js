const { Pool } = require('pg');

const pool = new Pool({
  user: 'Pha-LeNguyen',
  host: '127.0.0.1',
  database: 'api',
  password: 'password',
  port: 5432,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}
