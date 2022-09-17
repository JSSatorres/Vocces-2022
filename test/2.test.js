const { numbersTop } = require("../2");
const arrayTest1 = [3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1];
const arrayTest2 = [
  "a",
  3,
  2,
  "a",
  2,
  3,
  "a",
  3,
  4,
  "a",
  "a",
  1,
  "a",
  2,
  "a",
  3,
];

describe(" function numbersTop", () => {
  describe("returns the three most repeated elements sorted in descending order by number of repetitions", () => {
    describe("recived [3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]", () => {
      test("should return '[1, 3, 2]' ", () => {
        expect(numbersTop(arrayTest1)).toStrictEqual(["1", "3", "2"]);
      });
    });
    describe('recived ["a",3,2,"a",2,3,"a",3,4,"a","a",1,"a",2,"a",3]', () => {
      test("should return '[ 'a', 3, 2 ]'", () => {
        expect(numbersTop(arrayTest2)).toStrictEqual(["a", "3", "2"]);
      });
    });
  });
});
