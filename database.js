var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var Db = []

var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    // assert.equal(err, null);
    // assert.equal(2, docs.length);
    console.log("Found the following records");
    console.dir(docs);
    callback(docs);
  });
}

var deleteDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.deleteOne({ a : 3 }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });
}

// updateDocument
var updateDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a : 2 }
    , { $set: { b : 1 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });  
}

// insert
var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}

var url = 'mongodb://localhost:27017/matcha';
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server");
	deleteDocument(db, function() {
		db.close();
	})
})



// class APIMongodb {

  constructor(url, DocumentName) {
	this.url = url;
	this.DocumentName = DocumentName;
	MongoClient.connect(this.url, function(err, db) {
		assert.equal(null, err);
		console.log("Connected correctly to server");
		this.db = db
	})
  }

const MongodbAPI = new APIMongodb('mongodb://localhost:27017/matcha', 'Matcha');
// MongodbAPI.createDatabase();
console.log(MongodbAPI);
MongodbAPI.createDatabase();
MongodbAPI.closeDatabase();
var hello = function() {
	console.log("hello");
}
var i = 3;
// module.exports = MongodbAPI
module.exports = {
	i,
	hello
}