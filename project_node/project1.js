let multipleSum = 0

for (let number = 1; number < process.argv[2]; number++){
    if (number % 3 === 0 || number % 5 === 0) {
        multipleSum += number
    } 
}

console.log(multipleSum)