//Q14.  Write a program to build a (pyramid) of "*" for a given number of rows. for example rows = 6 ?

//Write your code here


function pyramid(rows) {

	let str = "";
	for(let row = 1; row <= rows; row++) {
		for(let j = 1; j <= rows-row; j++) {
		  str += "   ";
		}
		for(let k = rows-row + 1; k < rows + row; k++) {
		  str += "*  ";
		}
		for(let m = rows + row; m <= 2*rows-1; m++) {
		  str += "   ";
		}
		str += "\n";
	}
	console.log(str);
}

pyramid(3);
