const sieve = max => {
    const sieve = new Array(max).fill(true);

    for (let i = 2; i < Math.sqrt(max); i++){
        if(sieve[i]){
            for(let j = Math.pow(i, 2); j < max; j += i){
                sieve[j] = false
            }
        }
    }

    return sieve.reduce((primes, isPrime, i) => {
        if ( isPrime && i > 1){
            primes.push(i);
        }
        return primes;
    }, [])
}

module.exports.sieve = sieve;