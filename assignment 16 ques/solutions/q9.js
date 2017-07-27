//Q9. Write a function to return the list of properties (keys) of given object?

//Write your code here

const library = { film: 'Lagaan', rating: '5', year: 2003};
const arrLibrary =[
	{ film: 'Lagaan', rating: '5', year: 2003},
  	{ film: 'Bahubali', rating: '4', year: 2015},
  	{ film: 'Godfather', rating: '4', year: 1990}	
]

//console.log(Object.keys(library));

console.log(Object.keys(arrLibrary[2]));
