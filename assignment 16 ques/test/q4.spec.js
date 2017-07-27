let chai = require('chai');
let expect = chai.expect;
let index = require('../solutions/q4');

describe('Question 4 - Test code for correct output', function(){
  it ('Matches the desired output', function(done){
      expect(index([10,4,7,9,2,3,1,8,6,5])).to.deep.equal([1,2,3,4,5,6,7,8,9,10]);
      done();
    });
  });
