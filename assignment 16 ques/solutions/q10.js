//Q10. Write a program which accept average marks of the student achieved in exams and convert them into grade
// and display ratings of each student, grades and ratings can be calculated asper the following table:
/*
Range   	     Grade	Rating
>=0 and <= 60	  F	    Poor
>=61 and <= 70	D	    Fair
>=71 and <= 80	C	    Average
>=81 and <= 90	B	    Good
>=91 and <=100	A	    Excellent
*/

const studentDetails = [
  {name:'David',marks:80},
  {name:'Vinoth',marks:77},
  {name:'Divya',marks:88},
  {name:'Ishitha',marks:95},
  {name:'Thomas',marks:68}
];

let studentsGradeRatingArr = [];

(function  studRatings(){
	for (i =0 ; i < studentDetails.length; i++){
		converGrade(studentDetails[i].marks, studentDetails[i].name);
	}		
})();

function converGrade(marks, name){
	if (marks >= 91 && marks <= 100){
		obj = {
			"grade": "A",
        	"name": name,
      	    "rating": "Excellent"
		};	
		studentsGradeRatingArr.push(obj);
	} else if (marks >= 81 && marks <= 90){
		obj = {
			"grade": "B",
        	"name": name,
      	    "rating": "Good"
		};	
		studentsGradeRatingArr.push(obj);
	} else if (marks >= 71 && marks <= 80){
		obj = {
			"grade": "C",
        	"name": name,
      	    "rating": "Average"
		};	
		studentsGradeRatingArr.push(obj);
	} else if (marks >= 61 && marks <= 70){
		obj = {
			"grade": "D",
        	"name": name,
      	    "rating": "Fair"
		};	
		studentsGradeRatingArr.push(obj);
	} else if (marks >= 0  && marks <= 60){
		obj = {
			"grade": "E",
        	"name": name,
      	    "rating": "Poor"
		};	
		studentsGradeRatingArr.push(obj);
	} else {
		console.log('Not a vaild marks.');
	}

};
/*console.log(studentsGradeRatingArr);
*/
module.exports = studentsGradeRatingArr;
