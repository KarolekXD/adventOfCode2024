const fs = require('node:fs');
const inputData = fs.readFileSync('data.txt').toString();

let proceed = true

let regExp = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;
let checkForNumbers = /[0-9]{1,3}/g;
let proceedregExp = /do\(\)/g;
let dontProceedregExp = /don't\(\)/g;

let passingResults = [...inputData.matchAll({regExp, proceedregExp, dontProceedregExp})];

let sum = 0;
passingResults.forEach((passingresult) => {
  if(passingresult[0] == "do()") proceed = true
  else if(passingresult[0] == "don't")
  let currentNumbers = [];
  currentNumbers = [...passingresult[0].matchAll(checkForNumbers)];
  sum += currentNumbers[0][0] * currentNumbers[1][0];
});
console.log(sum);
