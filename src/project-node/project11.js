const fs = require("fs");

const stringLineToNumberLine = (arrayStr) =>
  arrayStr.map((str) => parseInt(str, 10));

const input = fs
  .readFileSync("../../inputs-for-problems/project11", "utf8")
  .split("\n")
  .map((line) => line.split(" "))
  .filter((line) => line.length > 1)
  .map(stringLineToNumberLine);

const horizontalProduct = (accumulator, line) => {
  return line.reduce((acc, curr, index, src) => {
    const prod = src[index] * src[index + 1] * src[index + 2] * src[index + 3];
    if (!isNaN(prod) && prod >= acc) {
      acc = prod;
    }
    return acc;
  }, 0);
};

const verticalProduct = (accumulator, line, srcIndex, srcArray) => {
  return line.reduce((acc, curr, index) => {
    if (srcArray[srcIndex + 3]) {
      const prod =
        srcArray[srcIndex][index] *
        srcArray[srcIndex + 1][index] *
        srcArray[srcIndex + 2][index] *
        srcArray[srcIndex + 3][index];
      if (!isNaN(prod) && prod >= acc) {
        acc = prod;
        if (acc >= accumulator) {
          accumulator = acc;
        }
      }
      return acc;
    }
    return accumulator;
  }, 0);
};

const arrayReverser = (gridArray) => gridArray.map((line) => line.reverse());

const diagonalReducer = (accumulator, line, srcIndex, srcArray) => {
  return line.reduce((acc, curr, index) => {
    if (srcArray[srcIndex + 3] && srcArray[srcIndex + 3][index + 3]) {
      const prod =
        srcArray[srcIndex][index] *
        srcArray[srcIndex + 1][index + 1] *
        srcArray[srcIndex + 2][index + 2] *
        srcArray[srcIndex + 3][index + 3];
      if (!isNaN(prod) && prod >= acc) {
        acc = prod;
        if (acc >= accumulator) {
          accumulator = acc;
        }
      }
      return acc;
    }
    return accumulator;
  }, 0);
};

const diagonalProduct = (accumulator, line, srcIndex, srcArray) => {
  const checkArray = [srcArray, arrayReverser(srcArray)];
  return checkArray.reduce((acc, curr) => {
    const maxProd = curr.reduce(diagonalReducer, 0);
    if (maxProd >= acc) {
      acc = maxProd;
    }
    return acc;
  }, 0);
};

const productor = (gridArray) => {
  const products = [horizontalProduct, verticalProduct, diagonalProduct];
  return products.reduce((acc, product) => {
    const prod = gridArray.reduce(product);
    if (prod >= acc) {
      acc = prod;
    }
    return prod;
  });
};

console.log(productor(input));
