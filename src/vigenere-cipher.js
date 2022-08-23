const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const { keyArray, messageArray, notCharacterts } = this.arraysToIndexes(
      message,
      key
    );
    const indexArr = this.sumArrays(messageArray, keyArray);
    const lettersArr = indexArr.map(item => this.alphabet[item]);
    notCharacterts.forEach(item => lettersArr.splice(item.idx, 0, item.char));
    if (this.direction) {
      return lettersArr.join('');
    } else {
      return lettersArr.reverse().join('');
    }
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    const { keyArray, messageArray, notCharacterts } = this.arraysToIndexes(
      message,
      key
    );
    const indexArr = this.minusArrays(messageArray, keyArray);
    const lettersArr = indexArr.map(item => this.alphabet[item]);
    notCharacterts.forEach(item => lettersArr.splice(item.idx, 0, item.char));
    if (this.direction) {
      return lettersArr.join('');
    } else {
      return lettersArr.reverse().join('');
    }
  }

  arraysToIndexes(message, key) {
    const notCharacterts = message
      .toUpperCase()
      .split('')
      .reduce((acc, cur, idx) => {
        if (!this.alphabet.includes(cur)) {
          acc.push({ char: cur, idx });
        }
        return acc;
      }, []);

    const messageCharacters = message.replace(/[\W\d]/gim, '');
    console.log(messageCharacters);
    const fullKey = key.padEnd(messageCharacters.length, key);

    return {
      messageArray: messageCharacters
        .toUpperCase()
        .split('')
        .map(item => this.alphabet.indexOf(item)),
      keyArray: fullKey
        .toUpperCase()
        .split('')
        .map(item => this.alphabet.indexOf(item)),
      notCharacterts,
    };
  }

  sumArrays(messageArray, keyArray) {
    return messageArray.map((item, index) => {
      let newElement = item + keyArray[index];
      if (newElement > this.alphabet.length - 1) {
        newElement -= this.alphabet.length;
      }
      return newElement;
    });
  }

  minusArrays(messageArray, keyArray) {
    return messageArray.map((item, index) => {
      let newElement = item - keyArray[index];
      if (newElement < 0) {
        newElement += this.alphabet.length;
      }
      return newElement;
    });
  }
}

module.exports = {
  VigenereCipheringMachine,
};
