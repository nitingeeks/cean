//Q12. Write a function that accepts two arguments, first as string and other as a letter and the function will count the number of occurrences of the specified letter within the string.
/* Sample arguments: 'gmail.com', 'o'
Expected output: 1
*/

function char_count(str, letter){
	//console.log(str, letter)
//Write your code here
	let count = 0;
	for(a of str){
		if (a === letter){
			 ++count;
		}
	}
	return(count);
};


module.exports = char_count;
