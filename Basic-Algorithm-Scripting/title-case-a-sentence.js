//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
  const regex= /(^|\s)\S/g;
  str = str.toLowerCase();
  return str.replace(regex,match=>match.toUpperCase());
}

console.log(titleCase("sHoRt AnD sToUt"));