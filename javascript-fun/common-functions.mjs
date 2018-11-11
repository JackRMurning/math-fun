export function isEven(number){
    if(number === 0){
        return false;
    }
    return number % 2 === 0;
}

export function isOdd(number){
    if(number === 0){
        return false;
    }
    return (number - 1) % 2 === 0;
}

export function sieveOfEratosthenes(number){
    const primes = [];
    for(let i=1; i <= number; i++){
        primes.push(true)
    }
    
    for (let i = 2; i <= parseInt(Math.sqrt(number)); i++){
        if(primes[i] === true){
            for(let j = 0; (i**2) + (j*i) <= number; j++){
                let index = (i**2) + (j*i)
                primes[index] = false;
            }
        }
    }
    primes.shift()
    const primeNumbers = primes.map( (e, index) =>  {
        if(e === true){
            return index + 1
        }
    })
    primeNumbers.shift()
    return primeNumbers.filter(Boolean)
}