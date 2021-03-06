const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59b69de48e62772711df35b9';

// if (!ObjectID.isValid(id)){
//   console.log('id is not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));


var id = '69b648d7f7052378134c36cd'

User.findById(id).then((user) => {
  if (!user){
    return console.log('User not found.');
  }
  console.log('User by id', user);
}).catch((e) => console.log(e));
