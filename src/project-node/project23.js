const properDivisorsSum = require("../functions-node/properDivisorSum");

const limit = 28123;

const checkArray = [...Array(limit)];

const abundantNumbers = checkArray.reduce((acc, curr, index) => {
  const divSum = properDivisorsSum.properDivisorsSum(index, checkArray);
  if (divSum > index) {
    acc.push(index);
  }
  return acc;
}, []);

abundantNumbers.forEach((a) => {
  abundantNumbers.forEach((b) => {
    const abSum = a + b;
    if (abSum < limit) {
      checkArray[abSum] = true;
    }
  });
});

const naSums = checkArray.reduce(
  (acc, curr, index) => (curr ? acc : (acc += index)),
  0
);

console.log(naSums);
