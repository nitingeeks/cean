// Test Case for Q7.
let chai = require('chai');
let expect = chai.expect;
const lib = [
  { film: 'Godfather', rating: '4', year: 1990},
  { film: 'Lagaan', rating: '5', year: 2003},
  { film: 'Bahubali', rating: '4', year: 2015}
];

let index = require('../solutions/q7');
describe('Question 7 - Test code for correct output', function(){
  it ('Test whether the output is an object or not', function(done){
     expect(typeof(index)).to.deep.equal("object");
    done();
   });

  it ('Matches the desired output as per given input test case', function(done){
    expect(index).to.deep.equal(lib);
    done();
  });

});
