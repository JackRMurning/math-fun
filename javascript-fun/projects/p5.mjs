/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

Answer: 232792560

node --experimental-modules projects/p5.mjs
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