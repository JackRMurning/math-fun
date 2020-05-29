// #1 iteration

// let multipleSum = 0

// for (let number = 1; number < process.argv[2]; number++){
//     if (number % 3 === 0 || number % 5 === 0) {
//         multipleSum += number
//     }
// }

// console.log(multipleSum)

// #2

const threeFiveMultipleReducer = (accumulator, current, index) => {
  if (index % 3 === 0 || index % 5 === 0) {
    accumulator += index;
  }
  return accumulator;
};

const threeFiveMultipleSums = (limit) => {
  const rangeArray = [...Array(limit)];
  return rangeArray.reduce(threeFiveMultipleReducer, 0);
};

console.log(threeFiveMultipleSums(1000));
