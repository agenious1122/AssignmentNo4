
var tempInCels: number[] = [37, 0, -10, 15];
var tempInFh: number[] = convertCelsToFh(tempInCels);

function convertToFahrenheit(celsius: number): number 
{
  return (celsius * 9/5) + 32;
}

function convertCelsToFh(celsiusTemperatures: number[]): number[] 
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
console.log("Temperatures in Celsius   :",tempInCels);
console.log("--------------------------------------------------------------------");
console.log("Temperatures in Fahrenheit:", tempInFh);
console.log("--------------------------------------------------------------------");