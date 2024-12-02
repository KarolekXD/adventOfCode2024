const fs = require('node:fs');
let text = fs.readFileSync("input.txt").toString();
let reports = text.split("\n");
let safeCount = 0;

function isSafe(levels) {
    let isIncreasing = levels[0] < levels[1];
    for (let j = 0; j < levels.length - 1; j++) {
        if (isIncreasing) {
            if (!(levels[j] < levels[j + 1] && levels[j + 1] - levels[j] <= 3)) {
                return false;
            }
        } else {
            if (!(levels[j] > levels[j + 1] && levels[j] - levels[j + 1] <= 3)) {
                return false;
            }
        }
    }
    return true;
}

function checkWithSingleRemoval(levels) {
    for (let i = 0; i < levels.length; i++) {
        let modifiedLevels = [...levels];
        modifiedLevels.splice(i, 1);
        if (isSafe(modifiedLevels)) {
            return true;
        }
    }
    return false
}

for (let i = 0; i < reports.length; i++) {
    let levels = reports[i].split(" ").map(Number);

    if (isSafe(levels)) {
        safeCount++;
    } else {
        if (checkWithSingleRemoval(levels)) {
            safeCount++;
        }
    }
}

console.log(safeCount);
