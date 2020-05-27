const properDivisorsSum = (number, numbersArray) => {
  const divisors = numbersArray.reduce(
    (acc, curr, index) => {
      if (number === 0) {
        return acc;
      }
      if (number % index == 0 && number != index) {
        acc.push(index);
      }
      return acc;
    },
    [0]
  );
  const sum = divisors.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);
  return sum;
};

module.exports.properDivisorsSum = properDivisorsSum;
