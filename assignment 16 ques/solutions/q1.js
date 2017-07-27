//Q1. Write a program to display the current date in the following format mm/dd/yyyy?

module.exports = function(out){
  //Write your code here
  	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth()+1;
	let output = (((''+month).length < 2 ? '0': '') + month) + '/' + (((''+day).length < 2 ? '0':'') + day) + '/' +date.getFullYear();

	out(output);

  //out(m+"/"+d+"/"+y);
  
}
/*let date = new Date();
let day = date.getDate();
let month = date.getMonth()+1;
let output = (((''+month).length < 2 ? '0': '') + month) + '/' + (((''+day).length < 2 ? '0':'') + day) + '/' +date.getFullYear();

console.log(output);*/

