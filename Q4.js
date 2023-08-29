"use strict";
// 
let numbers = 1;
let evenNumbers = 0;
while (evenNumbers < 10) {
    if (numbers % 2 === 0) {
        console.log(numbers);
        evenNumbers++;
    }
    numbers++;
}
