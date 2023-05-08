//repeatStringNumTimes("abc", 3) should return the string abcabcabc.
function repeatStringNumTimes(str, num) {
   
   let newStr = str.split();
   let newStr2= [];
   for(num; num>0;num-- ){
     newStr2.push(newStr)
   }
return newStr2.join('')
}

console.log(repeatStringNumTimes("abc", 3));