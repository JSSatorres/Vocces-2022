const { increasedMeasurements } = require("../3");
const arrayTest1 = [
  245, 248, 259, 190, 180, 185, 191, 185, 188, 189, 204, 213, 215, 227, 222,
  221, 236, 235, 236, 232, 224, 221, 228, 234, 226, 227, 228, 230, 232, 234,
];

describe(" function increasedMeasurements", () => {
  describe("returns the number of days in which there has been an increase", () => {
    describe('recived "[ 245, 248, 259, 190, 180, 185, 191, 185, 188, 189, 204, 213, 215, 227, 222, 221, 236, 235, 236, 232, 224, 221, 228, 234, 226, 227, 228, 230, 232, 234]"', () => {
      test("should return '[19]' ", () => {
        expect(increasedMeasurements(arrayTest1)).toStrictEqual(19);
      });
    });
  });
});
