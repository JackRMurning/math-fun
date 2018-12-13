import { sieveOfEratosthenes } from '../common-functions';

const largestPrimeFactor = (number) => {
    const checkLimit = parseInt(Math.sqrt(number))
    const primes = sieveOfEratosthenes(checkLimit).reverse()
    
    for(let prime of primes){        
        if( number % prime === 0 ){
            return prime
        }
    }
}

console.log(largestPrimeFactor(600851475143));
