const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
export {uppercaseString,lowercaseString }

import {uppercaseString, lowercaseString} from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");
//Use * to Import Everything from a File
import * as stringFunctions from './string_functions.js';


stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// export DEFAULT function with fallback value
export default function subtract(x, y) {
  return x - y;
}
//Import a Default Export
import subtract from "./math_functions.js"


subtract(7,4);