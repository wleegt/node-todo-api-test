// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, db) {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({_id: new ObjectID('5825a5af53aaf02906bdc243')}).toArray()
  //   .then(function(docs) {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, function(err) {
  //     consol.log('Unable to fetch todos', err);
  //   });

  db.collection('Todos').find().count()
    .then(function(count) {
      console.log('Todos count: ' + count);
    }, function(err) {
      consol.log('Unable to fetch todos', err);
    });

  // db.close();
});
