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
  database.findByID(9999999)
    .then(data => {
      // console.log('data', data);

      res.status(200).send(data);
    })
    .catch(err => {
      // console.log('err', err)

      res.status(500).send(err);
    });
});

app.post('/productinfo', (req, res) => {
  console.log(req.body);
  item = req.body;
  // res.status(200).send('great work!');
  database.postItem(item)
    .then(data => {
      // console.log('data', data);

      res.status(200).send(data);
    })
    .catch(err => {
      // console.log('err', err)

      res.status(500).send(err);
    });
});

app.put('/productinfo/:ID', (req, res) => {
  let id = req.params.ID;
  console.log(req.body);
  item = req.body;
  // res.status(200).send('great work!');
  database.updateItem(id, item)
    .then(data => {
      console.log('data', data);
      res.status(200).send(`item #${id} updated with the following information ${item}`);
    })
    .catch(err => {
      console.log('error in PUT /productinfo/:ID', err)
      res.status(500).send(err);
    });
});

app.get('/productinfo/:ID', (req, res) => {
  let id = req.params.ID;
  database.findByID(id)
    .then(data => {
      // console.log('data', data);

      res.status(200).send(data);
    })
    .catch(err => {
      // console.log('err', err)

      res.status(500).send(err);
    });
});


app.listen(port, () => console.log('Now listening on port: ' + port));