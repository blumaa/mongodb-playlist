const mongoose = require('mongoose')
//conect to mongodb

mongoose.connect('mongodb://localhost/testaroo')

mongoose.connection.once('open', function(){
  console.log('connection has been made');
}).on('error', function(error){
  console.log('connection error:', error);
})
