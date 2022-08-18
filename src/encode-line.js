const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let counter = 0;
  while (counter < str.length) {
    let element = str[counter];
    let letterCounter = 0;

    while (element === str[counter]) {
      letterCounter++;
      counter++;
    }
    result += (letterCounter > 1 ? letterCounter : '') + element;
  }
  return result;
}

module.exports = {
  encodeLine,
};
