const fibonnaciGen = (number) => {
    let fibSeq = [1, 2];
    while(true){
        let nextTerm = fibSeq.slice(-2).reduce((x, y) => x + y)
        if(nextTerm >= number){
            return fibSeq;
        }
        fibSeq.push(nextTerm);
    }
    return fibSeq;
}


const sumEvenFibTermsBelow = (number) => {
    return fibonnaciGen(number).filter( x => x % 2 === 0).reduce((x, y) => x + y);
}

console.log(sumEvenFibTermsBelow(4000000));
