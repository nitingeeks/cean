//Q2: Write a function that accepts numbers as input with spaces in between (such as: 1 2 3 ) and returns highest and the lowest number?

function highestAndLowest(numbers){
// Write your code here
	splitNumber = numbers.split(" ");
	let arr = [];
	highest = '' + Math.max.apply(Math, splitNumber);
	lowest 	= '' + Math.min.apply(Math, splitNumber);
	arr.push(highest);
	arr.push(lowest);
	console.log((highest,lowest).split(' '));
	return(highest,lowest); 

}
module.exports = highestAndLowest;
