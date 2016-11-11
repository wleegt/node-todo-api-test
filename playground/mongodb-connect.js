// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, function(err, result) {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops));
  // });

  // insert new doc into users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Wook',
  //   age: 20,
  //   location: 'New York'
  // }, function(err, result) {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(result.ops);
  // });

  db.close();
});
