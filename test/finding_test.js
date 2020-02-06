const assert = require("assert");
const OfficeChar = require("../models/officechars");

//describe tests
describe("Finding Records", function() {
  //create tests

  let char;

  beforeEach(function(done){
      char = new OfficeChar({
        name: "Jim"
      });
      char.save().then(function() {
        done();
      });
  })


  it("Finds one record from the DB", function(done) {
    OfficeChar.findOne({
      name: 'Jim'
    }).then(function(result){
      assert(result.name === 'Jim');
      done()
    })
  });


  it("Finds one record by ID from the DB", function(done) {
    OfficeChar.findOne({ _id: char._id}).then(function(result){
      assert(result._id.toString() === char._id.toString());
      done()
    })
  });



  //next test
});
