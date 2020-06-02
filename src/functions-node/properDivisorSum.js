const getDivisors = (number) => {
  const numbersArray = [...Array(number + 1)];
  return numbersArray.reduce((acc, curr, index) => {
    if (number === 0) {
      acc.push(number);
      return acc;
    }
    if (number % index == 0) {
      acc.push(index);
    }
    return acc;
  }, []);
};

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
module.exports.getDivisors = getDivisors;
