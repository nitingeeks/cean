// Q 5. Write a JavaScript program to remove duplicate items from an array?
// Given the following input - "1,1,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10"
// Note: the output should be [1,2,3,4,5,6,7,8,9,10]


// Test Case for Q.5
let chai = require('chai');
let expect = chai.expect;

let index = require('../solutions/q5');
describe('Question 5 - Test code for correct output', function(){
  it ('Test whether the object is an array or not', function(done){
     expect(Array.isArray(index([1,1,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]))).to.deep.equal(true);
    done();
   });

  it ('Matches the desired output as per given input test case', function(done){
    expect(index([1,1,2,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10])).to.deep.equal([1,2,3,4,5,6,7,8,9,10]);
    done();
  });

});
