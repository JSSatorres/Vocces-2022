/**
 *counts the number of times an element is repeated in an array
 * @param {array} array
 * @returns objetc {key:timesRepeated,key:timesRepeated}
 */

const timesRepeated = (array) => {
  const countElement = {};
  array.map((el) => (countElement[el] = countElement[el] + 1 || 1));
  return countElement;
};

/**
 * check if the received parameter is an array
 * @param {array} array
 */

const isAnArray = (array) => {
  if (!Array.isArray(array)) {
    throw TypeError("parametre is not an Array");
  }
};

/**
 * check if the received array is empty
 * @param {array} array
 */

const isAnArrayEmpty = (array) => {
  if (array.length === 0) {
    throw TypeError("Array is empty");
  }
};

module.exports = {
  timesRepeated,
  isAnArray,
  isAnArrayEmpty,
};
