const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const result = n.toString().split('').map((item, i) => {
    const arr = n.toString().split('');
    arr.splice(i, 1);
    return +arr.join('');
  });
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
