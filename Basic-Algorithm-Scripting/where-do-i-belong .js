//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).


function getIndexToIns(arr, num) {
  let newarr= arr.sort((a,b)=>{return a-b});

   if (newarr.length === 0) {
    return 0;
  }
  for(let i=0; i<newarr.length; i++){
    if (newarr[i]>=num){
      return i;
    } else if (i===(newarr.length-1)){
      return newarr.length;
    
    } else continue ;
  }
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

//Проще
function getIndexToIns2(arr, num){
  return arr.filter(val=>num >val).length; 
}
console.log(getIndexToIns2([10, 20, 30, 40, 50], 35));
