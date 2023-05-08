//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
 function mutation(arr) {
    arr = arr.map(str=> str.toLowerCase());
    let newrld=arr[1].split("");
    for(let i=0; i<newrld.length; i++){
     if ((arr[0].includes(newrld[i]))=== true){
       continue
     } else return false;
    }
  return true;
  }
  
  console.log(mutation(["Mary", "Army"]));

  // пайанский непонятный метод
  function mutation2([elem1, elem2]) {
  const regex = new RegExp(`[^${elem1}]`, 'i');
  return !regex.test(elem2);
}