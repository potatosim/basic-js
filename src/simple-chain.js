const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.getLength() ||
      typeof position !== 'number'
    ) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const response = this.chain.join('~~');
    this.chain = [];
    return response;
  },
};

module.exports = {
  chainMaker,
};
