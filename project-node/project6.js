const squareSumDifference = max => {
    let sumOfSquares = 0, squareOfSum = 0; 
    for (let i = 1; i <= max; i++) {
        squareOfSum += i;
        sumOfSquares += Math.pow(i, 2);
    };
    return Math.pow(squareOfSum,2) - sumOfSquares 
};

console.log(squareSumDifference(100))