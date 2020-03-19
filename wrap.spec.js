const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Shouldnt have more than 20 characters in a line', () => {
      expect(wrap('Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.', 20).split('\n')[0].length).to.be.below(21)
  });
  it('Should return the string if the string has less than maxLength per line', () => {
      expect(wrap('testing sent', 20)).to.equal('testing sent');
  });
  
});