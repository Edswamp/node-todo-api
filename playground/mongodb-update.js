// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb server.');
  }
  console.log('connected to mongo server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("59b3cc4626774a1d7cc6f6c8")
  }, {
    $set:{
      completed: true
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  // db.close();
});