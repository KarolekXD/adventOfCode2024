const fs = require("node:fs");
const text = fs.readFileSync("input.txt").toString();
const regExp = /[0-9]{2}\|[0-9]{2}/
let X = []
let Y = []
let numberOrders = []
let pageOrderingRules = []
let SingleLines = text.split("\n");

function checkForOrder(X, Y, numberOrders) {
    numberOrders.forEach((numberOrder)=>{
        // let checkTheNumbers = Y.match(numberOrder)  <--- i need this and the coresponding X numbers, then check if the given order matches the one provided, and then proceed acordingly
        for (let i = 0; i < numberOrders.length; i++) {

        }
    })
    
}

SingleLines.forEach((Line)=>{
    let pageOrderingRule = Line.match(regExp) || 0
    if (pageOrderingRule != 0) {
        pageOrderingRules.push(pageOrderingRule[0])
    }
    else if (Line != "" && Line != " " && Line != undefined && Line != null) {
        numberOrders.push(Line.split(","));
    }
})

pageOrderingRules.forEach((rule)=>{
    let XandYnumbers = rule.split("|");
    X.push(XandYnumbers[0])
    Y.push(XandYnumbers[1])
})

checkForOrder(X, Y, numberOrders)
