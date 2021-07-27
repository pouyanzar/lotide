const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns 2 for tail(['Hello', 'Lighthouse', 'Labs']).length", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it("returns ['Lighthouse', 'Labs'] for tail(['Hello', 'Lighthouse', 'Labs'])", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [] for tail(['Hello'])", () => {
    assert.deepEqual(tail(['Hello']), []);
  });
  it("returns [] for tail(['Hello'])", () => {
    assert.deepEqual(tail(['Hello']), []);
  });
});
