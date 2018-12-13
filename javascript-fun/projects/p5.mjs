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

import { sieveOfEratosthenes, factorDecomposition } from '../common-functions';

const check = sieveOfEratosthenes(10);

console.log(factorDecomposition(20, check))


