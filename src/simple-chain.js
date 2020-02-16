const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = ''
    } else {
      value = value + '';
    }
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error();
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = '';
    if (this.chain.length === 0) {
      this.chain = [];
      return '(  )'
    } else {
      for (let i = 0; i < this.chain.length; i += 1) {
        res += `( ${this.chain[i]} )~~`
      }
    }
    res = res.substring(0, res.length - 2);
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;
