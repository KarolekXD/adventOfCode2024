const fs = require('node:fs');
const inputData = fs.readFileSync('data.txt').toString();

let proceed = true

let regExp = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g;
let checkForNumbers = /[0-9]{1,3}/g;

let passingResults = [...inputData.matchAll(regExp)];

let sum = 0;
passingResults.forEach((passingresult) => {
    if (passingresult[0] == "do()") { proceed = true }
    else if (passingresult[0] == "don't()") {proceed = false}
    else {
        if (proceed) {
            let currentNumbers = [];
            currentNumbers = [...passingresult[0].matchAll(checkForNumbers)];
            
            sum += parseInt(currentNumbers[0][0]) * parseInt(currentNumbers[1][0]);
        }
    }
});
console.log(sum);
