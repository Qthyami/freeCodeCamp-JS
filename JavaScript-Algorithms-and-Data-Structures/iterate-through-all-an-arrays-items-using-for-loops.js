//filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) should return [[10, 8, 3], [14, 6, 23]]
//filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2) should return [["flutes", 4]]
//filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter") should return [["amy", "beth", "sam"]]


function filteredArray(arr, elem) {
  
 
  let newArr = [...arr];
for (let i=0; i<newArr.length; i++){
  
  if (Array.isArray(newArr[i]) === false){
    
    continue;
  } else {
    
    if (newArr[i].indexOf(elem)>=0) {
      newArr.splice(i,1);
      i--;
     
    } else {
      continue;
    }
  }
}
 
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//ПРОЩЕ:
function filteredArray1(arr, elem) {
  let newArr = arr.filter(subArr => !subArr.includes(elem));
  return JSON.stringify(newArr);
  //JSON.stringify нужен, чтобы увидеть, что в подмассивах, иначе будет отображаться как [Array(3), Array(3), Array(3)]
}

console.log(filteredArray1([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 2)); // выводит []