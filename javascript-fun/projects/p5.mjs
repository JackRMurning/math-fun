/* 
node --experimental-modules projects/p5.mjs
1. get a list of the primes up to the range limit of the divisor set.
2. generate a list of our desired divisors.
3. get the prime factor decomposition of each number in the divisor set array of arrays
4. create map with
    -key = unique prime
    -value = maximum number of entries the key prime appears in a prime factor decomposition.
    
    i.e. map of primesDecompEntryQuantities for 1-6:
    {
        2: 2,
        3: 1,
        5: 1
    }
5. raise calculate the product of of totals from raising keys to power of their values.
*/

import {factorDecomposition, sieveOfEratosthenes} from '../common-functions';

function p5(number){
    const primesUpToNumber = sieveOfEratosthenes(number);
    const maxPrimeOccurences = new Map();
    for(let i= 2; i <=number; i++ ){
        const primeFactorDecomposition = factorDecomposition(i, primesUpToNumber);
        for (let p of primesUpToNumber){
            let count = 0;
            for(let i=0; i<primeFactorDecomposition.length; i++){
                if (primeFactorDecomposition[i] == p){
                    count++;
                }
            }
            if(!maxPrimeOccurences.has(p) || maxPrimeOccurences.get(p) < count){
                maxPrimeOccurences.set(p, count)
            } 
        }
    }
    const iterator = maxPrimeOccurences.entries();
    let total = 1;
    for (let kp of iterator){
        const amount= kp[0]**kp[1]
        total*= amount;
    }
    return total;
}

console.log(p5(20));