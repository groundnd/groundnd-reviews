const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
const { Review } = require('./db.js');
const compression = require('compression');
const redis = require('redis');
const client = redis.createClient();

const db = require('./db.1');

const app = express();
const port = 3002;

app.use(compression());
app.use('/abodes/:abode_id', express.static('public'));

app.get('/loaderio-57c70e642def572347e45d8b1a626873', (req, res) => {
  res.send('/loaderio-57c70e642def572347e45d8b1a626873');
});

const getReviews = (req, res, isbn) => {
  const abodeId = req.params.abode_id;
  db.query(`SELECT * FROM reviews WHERE abodeid=${abodeId};`, '', (err, abodeInfo) => {
    if (err) {
      console.log('failed to find this listing', err);
    } else {
      let obj = {};
      obj.abode_id = abodeId;
      obj.reviews = [];
      for (let i = 0; i < abodeInfo.rows.length; i += 1) {
        const current = abodeInfo.rows[i]; //object 0
        let obj1 = {};
        obj1.user_name = current.username;
        obj1.user_photo = current.userphoto;
        obj1.review_text = current.reviewtext;
        obj1.accuracy = current.accuracy;
        obj1.communication = current.communication;
        obj1.cleanliness = current.cleanliness;
        obj1.location = current.location;
        obj1.value = current.value;
        obj1.review_date = current.reviewdate;
        obj.reviews.push(obj1);
      }
      client.setex(isbn, 3600, JSON.stringify(obj));
      res.send(JSON.stringify(obj));
    }
  });
};

const getCache = (req, res) => {
  let isbn = req.params.abode_id;
  client.get(isbn, (err, result) => {
    if (result) {
      res.send(result);
    } else {
      getReviews(req, res, isbn);
    }
  });
};

app.get('/api/abodes/:abode_id', getCache);

app.listen(port, () => { console.log(`Listening on port ${port}`); });
