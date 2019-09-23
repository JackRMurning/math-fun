const seive = require('../functions-node/primeFunctions');

const primesBelowTwoMill = seive.sieve(2000000);

const reducer = (acc, curr) => acc + curr;

console.log(primesBelowTwoMill.reduce(reducer));