const assert = require("assert");
const OfficeChar = require("../models/officechars");

//describe tests
describe("Updating Records", function() {
  //create tests

  let char;

  beforeEach(function(done){
      char = new OfficeChar({
        name: "Jim",
        age: 25
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

  it("Increments the age by 1", function(done) {
    OfficeChar.update({}, {$inc: {age:1}}).then(function(){
      OfficeChar.findOne({name: 'Jim'}).then(function(record){
        assert(record.age === 26)
        done()
      })
    })
  });



  //next test
});
