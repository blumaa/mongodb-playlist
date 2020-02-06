const assert = require("assert");
const OfficeChar = require("../models/officechars");

//describe tests
describe("Deleting Records", function() {
  //create tests

  let char;

  beforeEach(function(done){
      char = new OfficeChar({
        name: "Jim"
      });
      char.save().then(function() {
        assert(char.isNew === false);
        done();
      });
  })


  it("Deletes one record from the DB", function(done) {
    OfficeChar.findOneAndRemove({name: 'Jim'}).then(function(){
      OfficeChar.findOne({name: 'Jim'}).then(function(result){
        assert(result===null)
        done();
      })
    })
  });



  //next test
});
