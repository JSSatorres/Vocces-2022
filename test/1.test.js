const { findUniq } = require("../1");
const arrayTest1 = ["12", 10, "12", 11, 1, 11, 10, "12"];
const arrayTest2 = [
  "Capitán América",
  "Hulk",
  "Deadpool",
  "Capitán América",
  "Hulk",
  "Wonder Woman",
  "Deadpool",
  "Iron Man",
  "Iron Man",
];

describe(" function findUniq", () => {
  describe("returns the unique value of an array", () => {
    describe('recived ["12", 10, "12", 11, 1, 11, 10, "12"]', () => {
      test("should return '1' ", () => {
        expect(findUniq(arrayTest1)).toStrictEqual(["1"]);
      });
    });
    describe('recived ["Capitán América","Hulk","Deadpool","Capitán América","Hulk","Wonder Woman","Deadpool","Iron Man","Iron Man"]', () => {
      test("should return 'Wonder Woman'", () => {
        expect(findUniq(arrayTest2)).toStrictEqual(["Wonder Woman"]);
      });
    });
  });
});
