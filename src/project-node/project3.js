const primes = require('../functions_node/sieveOfEratothenes');

const largestPrimeFactor = compositeNumber => {
    const max = Math.floor(Math.sqrt(compositeNumber));
    const primeList = primes.sieve(max).reverse();
    const primeFactors = primeList.filter( prime => compositeNumber % prime === 0)
    return primeFactors[0]
}

console.log(largestPrimeFactor(600851475143));