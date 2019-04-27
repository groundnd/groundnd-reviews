const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
const { Review } = require('./db.js');
const compression = require('compression');
const db = require('./db.1');

const app = express();
const port = 3002;

app.use(compression());
app.use('/abodes/:abode_id', express.static('public'));

app.get('/api/abodes/:abode_id', (req, res) => {
  const abodeId = req.params.abode_id;
  db.query(`SELECT * FROM reviews WHERE abodeid=${abodeId};`, '', (err, abodeInfo) => {
    if (err) {
      console.log('failed to find this listing', err);
    } else {
      res.send(JSON.stringify(abodeInfo.rows));
    }
  });
});

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.listen(port, () => { console.log(`Listening on port ${port}`); });
