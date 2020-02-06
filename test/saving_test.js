
const assert = require('assert')
const OfficeChar = require('../models/officechars')

//describe tests
describe("Saving Records", function() {
  //create tests

  it("Saves a record to the DB", function(done) {
    const char = new OfficeChar({
      name: 'Jim'
    });
    char.save().then(function(){
      assert(char.isNew === false);
      done();
    })
  });

  //next test
});
