const assert = require("assert");
const OfficeChar = require("../models/officechars");

//describe tests
describe("Updating Records", function() {
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


  it("Update one record in the DB", function(done) {
    OfficeChar.findOneAndUpdate({name:'Jim'}, {name:'Pam'}).then(function(){
      OfficeChar.findOne({_id: char._id}).then(function(result){
        assert(result.name==='Pam')
        done()
      })
    })
  });



  //next test
});
