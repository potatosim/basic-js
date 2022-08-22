const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.reduce((acc, cur) => {
    let subDomen = '';
    cur
      .split('.')
      .reverse()
      .map(item => '.' + item)
      .forEach(item => {
        subDomen += item;
        if (acc[subDomen]) {
          acc[subDomen]++;
        } else {
          acc[subDomen] = 1;
        }
      });
    return acc;
  }, {});
}

module.exports = {
  getDNSStats,
};
