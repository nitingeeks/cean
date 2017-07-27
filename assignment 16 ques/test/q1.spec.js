//Q1. Write a program to display the current date in the following format mm/dd/yyyy?

//Test Case for Q1
// let chai = require('chai');
// let expect = chai.expect;
// var store = [];
// var oldf = console.log;
// console.log = function(){
//    store.push(arguments);
//    oldf.apply(console, arguments);
// }
//
// let index = require('../solutions/q1');
// function getDate(){
//   var date=new Date();
//   var d=date.getDate();
//   var m=date.getMonth();
//   var y=date.getFullYear();
//   return m+"/"+d+"/"+y;
// }
// describe.only('Question 1 - Test code for correct output', function(){
//   it ('Matches the desired output', function(done){
//     expect(store[0]['0']).to.deep.equal(getDate());
//     done();
//   });
// });

let chai = require('chai');
let expect = chai.expect;
let index = require('../solutions/q1');

function getDate(){
  var date=new Date();
  var d=date.getDate();
  var m=date.getMonth();
  var y=date.getFullYear();
  return m+"/"+d+"/"+y;
}
describe('Question 1 - Test code for correct output', function(){
  it ('Matches the desired output', function(done){
    index(function(data){
      expect(data).to.deep.equal(getDate());
      done();
    })
  });
});
