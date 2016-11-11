// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5825bb3e91846eb1d185b834')
  // }, {$set: {completed: true}}, {returnOriginal: false}
  // ).then(function(result) {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5825a74abc0700295f4d351e')
  }, {$set: {name: 'Andrew'}, $inc: {age: 1}}, {returnOriginal: false}
  ).then(function(result) {
  console.log(result);
  });

  // db.close();
});
