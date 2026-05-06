const convertToCelsius = function(fahrenheit) {
  const result = (fahrenheit -32)* 5/9 ;
  return parseFloat(result.toFixed(1));
  
 
};
convertToCelsius(100);
const convertToFahrenheit = function(celsius) {
  const result = (celsius*9/5+32);
  return parseFloat(result.toFixed(1));
 
  return celsius;
};
convertToFahrenheit(100);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

