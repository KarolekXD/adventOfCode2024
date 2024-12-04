const fs = require('node:fs');
let text = fs.readFileSync("input.txt").toString();

let rows = text.split("\n");
let board = [];
let rowsCount = rows.length;
let columnCount;
let wordLength = 3;

const regExp = /MAS|SAM/gm

rows.forEach((row) => {
    let currentRowValues = row.split("");
    columnCount = currentRowValues.length;
    board.push(currentRowValues);
})

function searchForXWord(Length, regExp, rowsCount, columnCount) {
    let WordCount = 0;
    let halfLength = Math.floor(Length / 2);
    for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
        for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
            let solutions = [];
            if (
                rowIndex - halfLength >= 0 &&
                rowIndex + halfLength < rowsCount &&
                columnIndex - halfLength >= 0 &&
                columnIndex + halfLength < columnCount
            ) {
                let solution1 = "";
                let solution2 = "";
    
                for (let offset = -halfLength; offset <= halfLength; offset++) {
                    solution1 += board[rowIndex + offset][columnIndex + offset];
                    solution2 += board[rowIndex + offset][columnIndex - offset];
                }
    
                solutions.push(solution1);
                solutions.push(solution2);
            }

            let correctresult = 0;
            solutions.forEach((solution) => {
                let results = solution.match(regExp) || 0
                if (results != 0) {
                    correctresult++
                }
            })
            if (correctresult == 2) {
                WordCount++
            }
        }
    }
    return WordCount;
}

console.log(searchForXWord(wordLength, regExp, rowsCount, columnCount));
