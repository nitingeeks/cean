// Test Case for Q15.
let chai = require('chai');
let expect = chai.expect;

let index = require('../solutions/q15');
const objD = { Developer: [ { name: 'Ashish', age: 32 }, { name: 'Arun', age: 30 } ],
  Programmer:
   [ { name: 'Venkat', age: 28 },
     { name: 'David', age: 27 },
     { name: 'Kalyani', age: 25 },
     { name: 'Priya', age: 22 } ] };

describe('Question 15 - Test code for correct output', function(){
  it ('Test whether the output of C is an array or not', function(done){
     expect(Array.isArray(index.c)).to.deep.equal(true);
    done();
   });
  it ('Test whether the output of D is an object or not', function(done){
      expect(typeof(index.d)).to.deep.equal("object");
     done();
    });
  it ('Test whether the output of E is an array or not', function(done){
     expect(Array.isArray(index.e)).to.deep.equal(true);
    done();
   });
  it ('Matches the desired output of C as per given input test case', function(done){
    expect(index.c).to.deep.equal(['Developer', 'Programmer']);
    done();
  });
  it ('Matches the desired output of D as per given input test case', function(done){
    expect(index.d).to.deep.equal(objD);
    done();
  });
  it ('Matches the desired output of E as per given input test case', function(done){
    expect(index.e).to.deep.equal(['Ashish','Arun','Venkat','David','Kalyani','Priya']);
    done();
  });

});
