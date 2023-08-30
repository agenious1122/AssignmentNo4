
var celsiusTemperatures: number[] = [37, 0, -10, 15]; // Example input array
var fahrenheitTemperatures: number[] = convertCelsiusArrayToFahrenheit(celsiusTemperatures);

function convertToFahrenheit(celsius: number): number 
{
  return (celsius * 9/5) + 32;
}

function convertCelsiusArrayToFahrenheit(celsiusTemperatures: number[]): number[] 
{
  var fahrenheitTemperatures: number[] = [];
  
  let index = 0;
  while (index < celsiusTemperatures.length) 
  {
    var celsius = celsiusTemperatures[index];
    var fahrenheit = convertToFahrenheit(celsius);
    fahrenheitTemperatures.push(fahrenheit);
    index++;
  }
  return fahrenheitTemperatures;
}
console.log("--------------------------------------------------------------------");
console.log("Temperatures in Celsius   :",celsiusTemperatures);
console.log("--------------------------------------------------------------------");
console.log("Temperatures in Fahrenheit:", fahrenheitTemperatures);
console.log("--------------------------------------------------------------------");