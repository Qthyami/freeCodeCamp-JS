const user = { name: 'John Doe', age: 34 };
const { name, age } = user;
console.log(user);


  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  const{today: highToday,tomorrow: highTomorrow } = HIGH_TEMPERATURES ;
    console.log(highToday)  ;
  
    const LOCAL_FORECAST = {
      yesterday: { low: 61, high: 75 },
      today: { low: 64, high: 77 },
      tomorrow: { low: 68, high: 80 }
    };
    
    // Only change code below this line
     
    
    const { today: { low: lowToday, high: highTooday }} = LOCAL_FORECAST;
    // Only change code above this line
    console.log(lowToday);