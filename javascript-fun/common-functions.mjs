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