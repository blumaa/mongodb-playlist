const mongoose = require("mongoose");
//conect to mongodb

//ES6 Promises
mongoose.Promise = global.Promise;

//connect to database before tests run
before(function(done){

  mongoose.connect("mongodb://localhost/testaroo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection
    .once("open", function() {
      console.log("connection has been made");
      done();
    })
    .on("error", function(error) {
      console.log("connection error:", error);
    });
})

// drop the chars collection before each test

beforeEach(function(done){
  //Drop the collection
  mongoose.connection.collections.officechars.drop(function(){
    done()
  })
})
