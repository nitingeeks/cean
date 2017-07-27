// Q11. Write a function that can accept a string and return the same after arranging it into alphabaetical order.
/* Example String: 'webmaster'
Expected Output: 'abeemrstw
*/

let string='webmaster';
//Write your code here

(function changeAlphabaticalOrder(){
	console.log(string.split('').sort().join(''));
})();