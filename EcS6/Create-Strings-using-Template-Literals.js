const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
let i=0;
const failureItems = [];
do {
  failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
i++;
}
while (i<arr.length);
  


  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);
