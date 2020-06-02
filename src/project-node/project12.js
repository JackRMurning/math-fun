const { getDivisors } = require("../functions-node/properDivisorSum");

const triangleNumberGenrator = () => {
  const triangleNumbers = [];
  const tnumGen = () => {
    if (triangleNumbers.length === 0) {
      triangleNumbers.push(1);
      tnumGen();
    }
    const nextIndex = triangleNumbers.length + 1;
    const nextTNumb = nextIndex + triangleNumbers[triangleNumbers.length - 1];
    const nextTNumbDivisor = getDivisors(nextTNumb);
    if (nextTNumbDivisor.length > 500) {
      return nextTNumb;
    }
    triangleNumbers.push(nextTNumb);
    tnumGen();
  };
  return tnumGen;
};

const tng = triangleNumberGenrator();
console.time();
// const result =
const result = tng();
console.log(result);
console.timeEnd();
