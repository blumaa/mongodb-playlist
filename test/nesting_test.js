const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author");

// Describe tests

describe("Nesting records", function() {
  //Create Tests

beforeEach(function(done){
  mongoose.connection.collections.authors.drop(function(){
    done()
  })
})

  it("Creates an author with sub-documents", function(done) {
    let pat = new Author({
      name: "Patrick Rufuss",
      books: [{ title: "Name of the Wind", pages: 400 }]
    });

    pat.save().then(function() {
      Author.findOne({ name: "Patrick Rufuss" }).then(function(result) {
        assert(result.books.length === 1);
        done();
      });
    });
  });
  it("add book to an author", function(done) {
    let pat = new Author({
      name: "Patrick Rufuss",
      books: [{ title: "Name of the Wind", pages: 400 }]
    });

    pat.save().then(function(){
      Author.findOne({ name: "Patrick Rufuss" }).then(function(result) {
        //add book to the books array
        result.books.push({title: "wise man's fear", pages: 300 });
        result.save().then(function(){
          Author.findOne({name: 'Patrick Rufuss'}).then(function(result){
            assert(result.books.length === 2)
            done()
          })
        })
      });
    })
  });
});
