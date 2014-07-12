// var exercise_1 = require("../exercise_1.js")

describe("A suite", function() {
  it("should generate an array with 1000 numbers", function() {
    expect(array1.length).toEqual(1000);
  });

  it("should generate an array with 1000 numbers", function() {
    expect(array2.length).toEqual(1000);
  });

  it("index values of array1 and array2 should be in a different sequence", function() {
    expect(array1[i]).toNotEqual(array2[j]);
  });
});