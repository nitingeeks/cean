let chai = require('chai');
let expect = chai.expect;
let index = require('../solutions/q2');

describe('Question 2 - Test code for correct output', function(){
  it ('Matches the desired output', function(done){
    expect(index("2 4 5 6 3").split(' ')).to.deep.equal(['6','2']);
    done();
  });
});
