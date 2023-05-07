//Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWordLength(str) {
  let words= str.split(" ");
  words.sort(function(a, b) {
  return b.length - a.length;
});
  return words[0].length;
}


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));