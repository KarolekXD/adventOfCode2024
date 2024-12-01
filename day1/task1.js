const fs = require('node:fs');
let text = fs.readFileSync("input.txt").toString();
let lTab = [];
let rTab = [];
let diff = 0;
let sLine = text.split("\n");

let i = 0;
while (i < sLine.length) {
    let e = sLine[i].split("   ");
    lTab.push(parseInt(e[0]));
    rTab.push(parseInt(e[1]));
    i++;
}

lTab.sort((a, b) => a - b);
rTab.sort((a, b) => a - b);

let j = 0;
while (j < lTab.length) {
    diff += Math.abs(lTab[j] - rTab[j]);
    j++;
}

console.log(diff);
