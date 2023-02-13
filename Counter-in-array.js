const arrayOfSheep = [];
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let counter =0;
  for (let i of arrayOfSheep) {
    if (i === true) {
      counter++;
      }
      else if (i !== true ) {
        counter+0;
      }
      else if (i == null ) {
        counter+0;
      }
      else if (i ==  undefined ) {
        counter+0;
      }
  }

return counter;
}
console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true, true]))