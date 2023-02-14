function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum ) {
    return [];
    } else {
    let numArr = rangeOfNumbers (startNum, endNum-1)
     numArr.push(endNum);
     return numArr;
    }
  };
  console.log (rangeOfNumbers(3,100))