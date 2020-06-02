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
