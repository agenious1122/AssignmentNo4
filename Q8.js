"use strict";
var tempInCels = [37, 0, -10, 15];
var tempInFh = convertCelsToFh(tempInCels);
function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function convertCelsToFh(celsiusTemperatures) {
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
console.log("Temperatures in Celsius   :", tempInCels);
console.log("--------------------------------------------------------------------");
console.log("Temperatures in Fahrenheit:", tempInFh);
console.log("--------------------------------------------------------------------");
