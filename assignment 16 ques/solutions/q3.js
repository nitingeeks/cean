//Q3. Write a program that it takes numbers as input and separate the numbers by inserting dash (-) between two even numbers
//For example if numbers is 12345648 the output should be 123456-4-8.
let nums = "12345648";
module.exports = function(nums,out){
  // Write your code here
  //
  /*let flag = 0;
	let str = [];
	for(i of numbers){	
		if (flag == 1){
			if((i % 2) == 0){
				str.push("-");
			}
			flag = 0;
		}
		if((i % 2) == 0){
			flag = 1;			
		}
	str.push(i);	
	}*/
    out(str.join(''))
  }
//}

function number(numbers){
	let flag = 0;
	let str = [];
	for(i of numbers){	
		if (flag == 1){
			if((i % 2) == 0){
				str.push("-");
			}
			flag = 0;
		}
		if((i % 2) == 0){
			flag = 1;			
		}
	str.push(i);	
	}
	console.log(str.join(''));
};


number("12345648");