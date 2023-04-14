//Using the .match() method on a string will return an array with the matched substring, along with its captured groups.

//Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);
console.log(repeatNum.match(reRegex))
