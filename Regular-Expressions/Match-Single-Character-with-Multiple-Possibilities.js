let quoteSample1 = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result1 = quoteSample1.match(vowelRegex); // Change this line
console.log(result1);
//Match Letters of the Alphabet
let alphabetRegex = /[a-z]/gi; // Change this line
let result2 = quoteSample1.match(alphabetRegex); // Change this line
console.log(result2)

let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result3 = quoteSample3.match(myRegex); // Change this line
console.log(result3)

let quoteSample4 = "3 blind mice.";
let myRegex4 = /[^aeiou0-9]/gi; // Change this line
let result4 = quoteSample4.match(myRegex); // Change this line
console.log(result4);