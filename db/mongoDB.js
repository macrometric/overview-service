const MongoClient = require('mongodb').MongoClient

const config = require('../knexfile');
const environment = 'development';
const knex = require('knex')(config[environment]);
// Connection URL
const url = 'mongodb://localhost:27017/tenMillion';


const findByID = (id) => {
  return knex("description")
    .where({ user_id: id })
    .catch(err => {
      console.log('err', err);
    });
}

const postItem = (item) => {
  return knex("description")
    //.where({ user_id: id })
    .insert(item)
    .catch(err => {
      console.log('err', err);
    });
}
const deleteItem = (item) => {
  return knex("description")
    //.where({ user_id: id })

    .catch(err => {
      console.log('err', err);
    });
}
const updateItem = (id, item) => {
  console.log('item ', item);
  return knex("description")
    .where({ user_id: id })
    .update(item)
    .catch(err => {
      console.log('err', err);
    });
}
//Small Steel Soap

// var findDocuments = function (db, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Find some documents
//   collection.find({ title: 'Small Steel Soap' }).toArray(function (err, docs) {
//     console.log("Found the following records");
//     callback(docs);
//   });
// }

// Use connect method to connect to the server
MongoClient.connect(url, (err, client) => {
  console.log(client);
  console.log("Connected correctly to server");
});

module.exports = { findByID, postItem, deleteItem, updateItem };