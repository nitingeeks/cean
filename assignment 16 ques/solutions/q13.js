//Q13. Write a program to list (Fibonacci) series till a given number?

fibonacci = function(numMax){
//Write your code here
	let arr 	= [];
	arr.push(0,1);
	let k = 2;
	let addNumber = 0;
	while ( addNumber < numMax){
		addNumber = arr[k-1]+arr[k-2]
		arr.push(addNumber);
		k++;
	}	
	console.log(arr);
}
/*fibonacci(5)*/
module.exports = fibonacci;
