function sum(arr, n) {
  // Only change code below this line
if (n <= 0) {
  return 0;
} else {
  return sum(arr, n - 1) + arr [n-1];
}
  // Only change code above this line
}
console.log(sum([9,5,2,1], 4))