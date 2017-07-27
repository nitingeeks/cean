// Test Case for Q13.
let chai = require('chai');
let expect = chai.expect;

let index = require('../solutions/q13');

describe('Question 13 - Test code for correct output', function(){
  index(5,function(data){
    it ('Matches the desired output as per given input test case', function(done){
      expect(data).to.deep.equal([0,1,1,2,3,5]);
      done();
    });
  });
});
