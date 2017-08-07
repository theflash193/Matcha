var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/matcha';

var findDocuments = function(db, query, callback) {
  // Get the documents collection
  var collection = db.collection('users');
  // Find some documents
  collection.find(query).toArray(function(err, docs) {
    console.log("Found the following records");
    console.dir(docs);
    callback(docs);
  });
}

// var deleteDocument = function(db, query, callback) {
//   // Get the documents collection
//   var collection = db.collection('documents');
//   // Insert some documents
//   collection.deleteOne(query, function(err, result) {
//     console.log("Removed the document with the field a equal to 3");
//     callback(result);
//   });
// }

// updateDocument
// var updateDocument = function(db, query, callback) {
//   var collection = db.collection('documents');
//   collection.updateOne(query, function(err, result) {
//     assert.equal(err, null);
//     assert.equal(1, result.result.n);
//     console.log("Updated the document with the field a equal to 2");
//     callback(result);
//   });  
// }

// insert
var insertDocuments = function(db, query, callback) {
  // Get the documents collection
  var collection = db.collection('users');
  // Insert some documents
  collection.insertMany(query, function(err, result) {
    console.log(query + "is insert in database");
    callback(result);
  });
}

// class APIMongodb {

// module.exports = MongodbAPI
module.exports = {
	insertDocuments,
  findDocuments,
  MongoClient,
  url
}