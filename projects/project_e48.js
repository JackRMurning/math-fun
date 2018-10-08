function selfPower(number){
    return number ** number;
};

function* range(start, end){
    yield start;
    if (start == end) return;
    yield* range(start+1, end);
};

function selfPowerSeries(length){
    let foo = [...range(1, length)];
    return foo.map(x => selfPower(x));
};

function powerSeriesSum(length){
    const reducer = (acc, val) => acc + val;
    let bar = selfPowerSeries(length).reduce(reducer);
    return bar;
}

console.log(powerSeriesSum(1000));

// Workout how to use big numbers
