const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then(function(result) {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '582879d66f947098dca90c88'}).then(function(todo) {
//   console.log(todo);
// });

Todo.findByIdAndRemove('582879d66f947098dca90c88').then(function(todo) {
  console.log(todo);
});
