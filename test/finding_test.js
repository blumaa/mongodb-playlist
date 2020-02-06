const assert = require("assert");
const OfficeChar = require("../models/officechars");

//describe tests
describe("Finding Records", function() {
  //create tests
  beforeEach(function(done){
      const char = new OfficeChar({
        name: "Jim"
      });
      char.save().then(function() {
        assert(char.isNew === false);
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

  //next test
});
