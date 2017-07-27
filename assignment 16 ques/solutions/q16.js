//Q16. Flatten the following object :

const arr = [5, [22], [[14]], [[4]],[5,6]];
const temp = [];



function flattenValue(arr) {
  //Write your code here
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flattenValue(toFlatten) : toFlatten);
  }, []);
}
//console.log(flattenValue(arr));
const newArr = flattenValue(arr);


module.exports = newArr;
