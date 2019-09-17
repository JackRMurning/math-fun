const prime = require('../functions-node/primeFunctions');

let primeArry = [2,3,5,7], max = 10

while(primeArry.length < 10001) {
    max *= 10;
    primeArry = prime.sieve(max);
}

// primeArry 10000 prime will be the 10001st prime as arrays first index is 0

console.log(primeArry[10000]);