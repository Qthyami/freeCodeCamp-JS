//findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
//findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

function findElement(arr, func) {
   
  const answ= arr.find(func);
  return answ;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));