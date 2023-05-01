//Return the factorial of the provided integer.
function factorialize(num) {
  let int=1;
  for(num;num>=1;num--){
int=int*num;

  }
  return int;
}

console.log(factorialize(5));