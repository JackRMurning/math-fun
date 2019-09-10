const palindromeCheck = number => {
    const numberString = number.toString();
    const reversedNumber = numberString.split('').reverse().join('');
    return numberString === reversedNumber;
};

const rangeMaker = (start, end) => {
    const sequenceOfNumbers = []
    for (let i = start; i <= end; i++ ){
        sequenceOfNumbers.push(i)
    }
    return sequenceOfNumbers.reverse()
}

const divChecker = (start, end, number) => {
    const divList = rangeMaker(start, end);
    for (let i of divList) {
        if ( number % i === 0 && number / i <= end){
            console.log(i)
            return true
        }
    }
    return false
}

const palindrones = rangeMaker(Math.pow(100,2), Math.pow(999,2)).filter(palindromeCheck)

for (let pal of palindrones){
    if (divChecker(100, 999, pal)){
        console.log(pal)
        return pal
    }
}