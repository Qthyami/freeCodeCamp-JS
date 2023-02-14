function countdown(n){
    if (n<1) {
    return [];
    } else {
      let countArr = countdown (n-1)
      countArr.unshift(n);
      return countArr;
  
    }
  }
  console.log (countdown (6));