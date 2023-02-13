
function randomRange(myMin, myMax) {
    // Only change code below this line
    let answ = Math.floor(Math.random()*(myMax-myMin+1)+myMin);
    if (answ <= myMax && answ >=myMin){
      return answ;
    }
  else return 0;
    
    // Only change code above this line
  }
  console.log(randomRange(11,1111))