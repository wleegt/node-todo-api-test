const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '58286b5bbe3f1434f8f8960a11';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then(function(todos) {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then(function(todo) {
//   console.log('Todo', todo);
// });

Todo.findById(id).then(function(todo) {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by Id', todo);
}).catch(function(e) {
  console.log(e);
})
