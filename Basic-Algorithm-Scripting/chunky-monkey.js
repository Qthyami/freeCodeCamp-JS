//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  let answ=[];
 
for (let i=0; i< arr.length; i=i+size){
answ.push(arr.slice(i,i+size));
}
return answ;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));