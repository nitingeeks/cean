// Q 16. Flatten the following object :
// var myObj = [5, [22], [[14]], [[4]],[5,6]]
// Note: the output should be [ 5, 22, 14, 4, 5, 6 ]

let chai = require('chai');
let expect = chai.expect;

let index = require('../solutions/q16');
// const inputArr = [5, [22], [[14]], [[4]],[5,6]];
// const testArr = index(inputArr);

describe('Question 16 - Test code for correct output', function(){
  it ('Test whether the object is an array or not', function(done){
    expect(Array.isArray(index)).to.deep.equal(true);
    done();
  });
  it ('Matches the desired output', function(done){
    expect(index).to.deep.equal([ 5, 22, 14, 4, 5, 6 ]);
    done();
  });
});
