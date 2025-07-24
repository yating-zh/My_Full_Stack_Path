const assert = require("assert");
describe("The Example of Assert Test Suite", function () {
  it("First Assert test - indexOf(4)", function () {
    assert.equal([1, 2, 3].indexOf(4), -1); //passed; 4 does not exist in the array,return -1
  });
  it("Second Assert test - indexOf(2)", function () {
    //assert.equal([1, 2, 3].indexOf(3), 2); // passed; the index of 3 is 2
    assert.equal([1, 2, 3].indexOf(3), "2"); // passed;
    //assert.strictEqual([1, 2, 3].indexOf(3), "2"); // failed; using strictEqual()
  });
  it("Second Assert test - indexOf(2)-failed", function () {
    assert.equal([1, 2, 3].indexOf(3), 1); //the index of 3 is 2
  });
});
