const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '59b69de48e62772711df35b9';

if (!ObjectID.isValid(id)){
  console.log('id is not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo){
    return console.log('ID not found');
  }
  console.log('Todo by id', todo);
}).catch((e) => console.log(e));