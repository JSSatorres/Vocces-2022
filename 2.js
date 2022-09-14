// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.

const {
  timesRepeated,
  isAnArray,
  isAnArrayEmpty,
  sortableArray,
} = require("./utils.js");

function numbersTop(array) {
  isAnArray(array);
  isAnArrayEmpty(array);

  const objetcCountElement = timesRepeated(array);

  let keysSorted = Object.keys(objetcCountElement).sort(function (a, b) {
    return objetcCountElement[a] - objetcCountElement[b];
  });
  return keysSorted.reverse().slice(0, 3);
}

/**
 * TEST Ejercicio 2
 */
numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]); // [ 1, 3, 2 ]
numbersTop(["a", 3, 2, "a", 2, 3, "a", 3, 4, "a", "a", 1, "a", 2, "a", 3]); // [ 'a', 3, 2 ]
