const project21 = require("./project21");

describe("Project 21", () => {
  it("should the sum of amicable numbers inclusively between 0 and a range limit, SOLUTION", () => {
    const runner = project21.euler21(10000);
    const result = runner();
    const expected = 31626;
    expect(result).toEqual(expected);
  });
});
