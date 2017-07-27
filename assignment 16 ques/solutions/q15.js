// Q 15. Consider the following array of objects and solve the problem statements blow:-
// a) Display all objects with occupation as 'Programmer'
// b) Sort the object basis the age key in the descending order
// c) Recreate the above array of objects into the following object of objects :{ 'Developer' : [{'name':_____________, 'age':__________},{}],'<anotheroccupation>': [{'name':______________, 'age':________},{}]}
// d) Use the map function to create a new array of names present in myObj.
// Expected output:
// [ 'Arun','Ashish','Kalyani','David','Priya','Venkat' ]

const myObj =[{'name':'Arun', 'age': 30, 'occupation': "Developer"},
{'name':'Ashish', 'age': 32, 'occupation': "Developer"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'David', 'age': 27, 'occupation': "Programmer"},
{'name':'Priya', 'age': 22, 'occupation': "Programmer"},
{'name':'Venkat', 'age': 28, 'occupation': "Programmer"}];

//Write your code here
/* Uncomment the below statement - when code is written
module.exports = {
  c: occupationArr,
  d: newObj,
  e: nameArr
};
*/
/*{ 'Developer' : [{'name':_____________, 'age':__________},
				 {'name':_____________, 'age':__________}
				]*/


//let test = myObj.map((myNewObj) => myNewObj.name);
// find
//let test = myObj.find((x) => x.age === 22)
// reduce
/*let test = myObj.reduce((sum, order) => (sum = sum + order.age),0)
console.log(test);
*/


let output = myObj.reduce((myNewObj, myObj) => {
		myNewObj[myObj.occupation] = myNewObj[myObj.occupation] || []
		myNewObj[myObj.occupation].push({
			name : myObj.name,
			age  : myObj.age	
		})
		return myNewObj		
	},{})	
console.log(JSON.stringify(output, null, 2));






/*(function allProgrammer(){	
	console.log(myObj.filter(function(myNewObj){ return myNewObj.occupation === 'Programmer'}));
})();*/


/*(function ageKeyDesc(){		
	console.log(myObj.sort(function(a,b){return b.age - a.age}));
})();*/




