//Q7. Write a function to sort the following array of objects by its key value (example key as year)?

const library = [
  { film: 'Lagaan', rating: '5', year: 2003},
  { film: 'Bahubali', rating: '4', year: 2015},
  { film: 'Godfather', rating: '4', year: 1990}
];

let compare = function(a, b) {
  //Write your code here  
  return a.year-b.year;
};

console.log(library.sort(compare));
module.exports = library.sort(compare);
