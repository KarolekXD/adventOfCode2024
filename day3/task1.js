const fs = require('node:fs');
const inputData = fs.readFileSync('data.txt').toString();

let regExp = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;
let checkForNumbers = /[0-9]{1,3}/g;

let passingResults = [...inputData.matchAll(regExp)];

let sum = 0;
passingResults.forEach((passingresult) => {
  let currentNumbers = [];
  currentNumbers = [...passingresult[0].matchAll(checkForNumbers)];
  sum += currentNumbers[0][0] * currentNumbers[1][0];
});

console.log(sum);
