let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/g; // Change this line
let result = ohRegex.test(ohStr);

//Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/g; // Change this line
let result = haRegex.test(haStr);
//Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);