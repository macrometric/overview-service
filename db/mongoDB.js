var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/ten_million';

//Small Steel Soap

var findDocuments = function (db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({ title: 'Small Steel Soap' }).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  console.log(client);
  console.log("Connected correctly to server");
  let db = client.db('ten_million');
  // insertDocuments(db, function () {
  findDocuments(db, function () {
    client.close();
  });
  // });
});