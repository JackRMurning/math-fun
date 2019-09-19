const fs = require('fs');

const readNumber = fs.readFileSync('../inputs-for-problems/project8', 'utf8').split('\n').join('').split('');

let max = 0
let accumulator

for (let i = 0; i< (readNumber.length - 12); i++) {
    if (i % 13 === 0) {
        accumulator = 0
    }
    accumulator = parseInt(readNumber[i], 10) * parseInt(readNumber[i+1], 10) * parseInt(readNumber[i+2], 10) * parseInt(readNumber[i+3], 10) * parseInt(readNumber[i+4], 10) * parseInt(readNumber[i+5], 10) * parseInt(readNumber[i+6], 10) * parseInt(readNumber[i+7], 10) * parseInt(readNumber[i+8], 10) * parseInt(readNumber[i+9], 10) * parseInt(readNumber[i+10], 10) * parseInt(readNumber[i+11], 10) * parseInt(readNumber[i+12], 10)
    if (accumulator >= max) {
        max = accumulator
    } 
}

console.log(max)
