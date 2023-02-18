

function diff(a, x , n) {
    let f = a*x^n;
    let fdx=n*a*x^(n-1)
    return fdx;
}
console.log(diff(2, y, 3));

function bmi(weight, height) {
    let answ= (weight / height^2);
    switch(answ) {
        case answ <= 18.5 : return "Underweigh";
        case answ <= 25 : return "Normal";
        case answ <= 30.0 : return "Overweight";
        case answ > 30 : return "Obese";
    }
    
  } 
  console.log (bmi (75,180));