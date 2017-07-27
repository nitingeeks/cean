// Test Case for Q12.
let chai = require('chai');
let expect = chai.expect;

let index = require('../solutions/q12');
describe('Question 12 - Test code for correct output', function(){
  it ('Matches the desired output as per given input test case', function(done){
    expect(index("sachingrover","r")).to.deep.equal(2);
    done();
  });

});
