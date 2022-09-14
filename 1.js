// Ejercicio 1
// Dada una matriz de N elementos en la que todos los elementos son iguales excepto uno,
// crea una función findUniq que retorne el elemento único.

const { timesRepeated, isAnArray, isAnArrayEmpty } = require("./utils.js");

function findUniq(array) {
  isAnArray(array);
  isAnArrayEmpty(array);

  const objetcTimesRepeated = timesRepeated(array);

  let numberNoRepeat = [];
  for (const key in objetcTimesRepeated) {
    if (objetcTimesRepeated[key] === 1) numberNoRepeat.push(key);
  }
  return numberNoRepeat;
}

/**
 * TEST Ejercicio 1
 */
findUniq(["12", 10, "12", 11, 1, 11, 10, "12"]); // 1

findUniq([
  "Capitán América",
  "Hulk",
  "Deadpool",
  "Capitán América",
  "Hulk",
  "Wonder Woman",
  "Deadpool",
  "Iron Man",
  "Iron Man",
]); // 'Wonder Woman'
