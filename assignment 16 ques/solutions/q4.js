//Q4. Write a program to sort the following array of numbers in ascending order.
// const myArray = [10,4,7,9,2,3,1,8,6,5];

const myArray = [10,4,7,9,2,3,1,8,6,5];

function sortArray(myArray){
//Write your code here
	myArray.sort(function(a,b){
		return (a-b);
	});
	return myArray;

}

module.exports = sortArray;
/*
myArray.sort(function(a,b){
	return (a-b);
});

console.log(myArray);*/
