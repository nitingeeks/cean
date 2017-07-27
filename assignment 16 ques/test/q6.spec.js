// Test Case for Q6.
let chai = require('chai');
let expect = chai.expect;

let index = require('../solutions/q6');
describe('Question 6 - Test code for correct output', function(){
  it ('Test whether the object is an array or not', function(done){
     expect(Array.isArray(index([1, 2, 3], [100, 2, 1, 10]))).to.deep.equal(true);
    done();
   });

  it ('Matches the desired output as per given input test case', function(done){
    expect(index([1, 2, 3], [100, 2, 1, 10])).to.deep.equal([3,100,10]);
    done();
  });

});
