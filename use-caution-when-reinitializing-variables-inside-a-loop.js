function zeroArray(m, n) {

  let newArray = [];
  
  for (let i = 0; i < m; i++) {
   let row = [];
    newArray.push(row);
    for (let j = 0; j < n; j++) {
   
      row.push(0);
    }
   
  }
  
  return newArray;
  
}

let matrix = zeroArray(3, 2);
console.log(matrix);
