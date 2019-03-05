const express = require('express');
const bodyParser = require('body-parser');
//const { queryDB } = require('../db/index.js');
const app = express();
const port = 3030;
const router = express.Router();
// const database = require('../db/postgresDB');
const database = require('../db/mongoDB');

app.use(express.static(__dirname + '/../public'));

console.log('I\'m running here PM2');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
  console.log('are we ehre?');

  database.findByID
    .then(data => {
      console.log('data', data)

      res.status(200).send(data);
    })
    .catch(err => {
      console.log('err', err)

      res.status(500).send(err);
    });
});

app.get('/productinfo/:ID', (req, res) => {
  let id = req.params.ID;
  const cb = (err, results) => {
    if (err) {
      console.log('Error in get request!');
      res.status(404).send();
    } else {
      console.log('Successful get request!');
      res.status(200).send(results);
    }
  }
  queryDB(cb, id);
});


app.listen(port, () => console.log('Now listening on port: ' + port));