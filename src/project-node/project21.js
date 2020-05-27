const properDivisorsSum = require("../functions-node/properDivisorSum");

const amicableCheck = (number, numbersArray) => {
  const da = properDivisorsSum.properDivisorsSum(number, numbersArray);
  const db = properDivisorsSum.properDivisorsSum(da, numbersArray);
  if (db === number && da != number) {
    return true;
  }
  return false;
};

const euler21 = (number) => {
  const numbersArray = [...Array(number + 1)];
  const result = () => {
    return numbersArray.reduce((acc, curr, index) => {
      return amicableCheck(index, numbersArray) ? (acc += index) : acc;
    }, 0);
  };
  return result;
};

const runner = euler21(10000);
console.log(runner());

exports.properDivisorsSum = properDivisorsSum;
exports.amicableCheck = amicableCheck;
exports.euler21 = euler21;
