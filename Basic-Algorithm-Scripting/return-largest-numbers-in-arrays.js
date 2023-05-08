//Return an array consisting of the largest number from each provided sub-array
function largestOfFour(arr) {
  return arr.map(subArr => Math.max(...subArr));
 
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//женский метод
function largestOfFour2(arr){
 let answ=[];
  for(let i=0; i<arr.length; i++){
    
    answ.push(Math.max(...arr[i]))
  }
return answ;
}
