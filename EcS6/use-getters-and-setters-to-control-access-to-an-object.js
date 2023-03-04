// Only change code below this line
class Thermostat {
  constructor(fareng) {
    this.fareng = fareng;
  }
  get temperature (){
    return ((this.fareng)-32)*5/9
  }
  set temperature (updateTemperature) {
    this.fareng = updateTemperature*9/5+32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius


console.log(thermos);
console.log(temp);