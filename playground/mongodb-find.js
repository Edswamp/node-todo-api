// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb server.');
  }
  console.log('connected to mongo server');

  // db.collection('Todos').find({
  //   _id:59b2bb7bcb2d9f4926056fbc
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // })
  
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
    
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // })

  db.collection('Users').find({name: 'Ed'}).toArray().then((name) => {
    console.log(name);
  }, (err) => {
    console.log('unable to fetch user.', err);
  })
  // db.close();
});