const prime = require('./sieveOfEratothenes');

let factorize = (number, checkList, factorArr) => {
    if (checkList.includes(number)) { 
        factorArr.push(number)
        return factorArr
    } else if (number < checkList[0]){
        return factorArr
    };
    let factor
    for (let i of checkList) {
        if (number % i === 0) {
            factor = i
            break
        }
    }
    factorArr.push(factor)
    factorize(number / factor, checkList, factorArr)
} 



const primeFactorization = number => {
    const checkLimit = Math.floor(Math.sqrt(number));
    const primes = prime.sieve(checkLimit);

}
const f = factorize(16, [2], [])

console.log(f)