console.log("Hello Word")
function bmi(weight, height) {
    let answ = weight / (Math.pow(height, 2));
    if (answ > 30 ) { return "Obese";
} else if (answ <= 30 && answ > 25) {
    return "Overweight";
} else if (answ <= 25.0 && answ > 18.5) {
    return "Normal";
} else if (answ <= 18.5)
   return "Underweight"
  
    }
    
  
  console.log (bmi (60, 1.8));