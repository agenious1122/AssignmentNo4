"use strict";
var celsiusTemperatures = [37, 0, -10, 15]; // Example input array
var fahrenheitTemperatures = convertCelsiusArrayToFahrenheit(celsiusTemperatures);
function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function convertCelsiusArrayToFahrenheit(celsiusTemperatures) {
    var fahrenheitTemperatures = [];
    let index = 0;
    while (index < celsiusTemperatures.length) {
        var celsius = celsiusTemperatures[index];
        var fahrenheit = convertToFahrenheit(celsius);
        fahrenheitTemperatures.push(fahrenheit);
        index++;
    }
    return fahrenheitTemperatures;
}
console.log("--------------------------------------------------------------------");
console.log("Temperatures in Celsius   :", celsiusTemperatures);
console.log("--------------------------------------------------------------------");
console.log("Temperatures in Fahrenheit:", fahrenheitTemperatures);
console.log("--------------------------------------------------------------------");
