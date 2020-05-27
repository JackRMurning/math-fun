let sum = 0;

for (let fibNum = 1 , previousFibNum, acc; fibNum < process.argv[2]; fibNum += acc) {
    if (!previousFibNum) {
        previousFibNum = 1;
    }
    acc = previousFibNum;
    previousFibNum = fibNum;
    if (fibNum % 2 === 0) sum += fibNum;
}

console.log(sum);