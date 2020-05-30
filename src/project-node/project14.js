const collatzIterator = (number) => {
  if (number % 2 != 0) {
    return 3 * number + 1;
  }
  return number / 2;
};

const collatzSequenceGen = () => {
  let count = 0;
  const collatzSequencer = (number) => {
    if (number === 1 || number === 0) {
      count++;
      return count;
    }
    const collatzIteration = collatzIterator(number);
    count++;
    return collatzSequencer(collatzIteration);
  };
  return collatzSequencer;
};

const longestCollatzSequence = (limit) => {
  const checkRange = [...Array(limit)];
  const collatzSequenceLengths = checkRange.map((_, index) => {
    const collatzer = collatzSequenceGen();
    return collatzer(index);
  });
  return collatzSequenceLengths.indexOf(
    collatzSequenceLengths.reduce((acc, curr, index) => {
      if (curr > acc) {
        acc = curr;
      }
      return acc;
    })
  );
};

console.log(longestCollatzSequence(1000000));
