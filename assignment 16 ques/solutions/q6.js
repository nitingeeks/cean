// 6. Write a function to find the difference of two arrays?

function difference(arr1,arr2) {
// Write your code here	 


 	let diff = arr1.filter(x => arr2.indexOf(x) == -1).concat(arr2.filter(x => arr1.indexOf(x) == -1));
 	return(diff);

}
module.exports = difference;

/*difference([1, 2, 3], [100, 2, 1, 10]);*/
