let chai = require('chai');
let expect = chai.expect;
let index = require('../solutions/q3');

describe('Question 3 - Test code for correct output', function(){
  it ('Matches the desired output', function(done){
    index("12345648",function(data){
      expect(data).to.deep.equal("123456-4-8");
      done();
    });
  });
});
