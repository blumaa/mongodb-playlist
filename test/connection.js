const mongoose = require("mongoose");
//conect to mongodb

//ES6 Promises
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/testaroo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .once("open", function() {
    console.log("connection has been made");
  })
  .on("error", function(error) {
    console.log("connection error:", error);
  });
