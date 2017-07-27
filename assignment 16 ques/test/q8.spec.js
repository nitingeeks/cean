// Test Case for Q8.
let chai = require('chai');
let expect = chai.expect;

let index = require('../solutions/q8');
describe('Question 8 - Test code for correct output', function(){
  it ('Matches the desired output as per given input test case', function(done){
    expect(index("sachin@stackroute.in")).to.deep.equal(true);
    expect(index("@sac@stackroute.in")).to.deep.equal(false);
    done();
  });

});
