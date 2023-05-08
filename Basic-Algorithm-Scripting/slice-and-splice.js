//frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
//Passed:The second array should remain the same after the function runs.
function frankenSplice(arr1, arr2, n) {
  let arr3=arr1.slice();
  let arr4=arr2.slice();
  arr4.splice(n,0,...arr3);
  return  arr4;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));



