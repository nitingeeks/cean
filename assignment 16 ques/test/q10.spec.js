// Test Case for Q10.
let chai = require('chai');
let expect = chai.expect;
const out = [ { name: 'David', grade: 'C', rating: 'Average' },
  { name: 'Vinoth', grade: 'C', rating: 'Average' },
  { name: 'Divya', grade: 'B', rating: 'Good' },
  { name: 'Ishitha', grade: 'A', rating: 'Excellent' },
  { name: 'Thomas', grade: 'D', rating: 'Fair' } ];

let index = require('../solutions/q10');
console.log(index);
describe('Question 10 - Test code for correct output', function(){
  it ('Test whether the output is an object or not', function(done){
     expect(typeof(index)).to.deep.equal("object");
    done();
   });

  it ('Matches the desired output as per given input test case', function(done){
    expect(index).to.deep.equal(out);
    done();
  });

});
