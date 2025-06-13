const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber with Chai', () => {
  it('should return 6 for SUM(1.4, 4.5)', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return -4 for SUBTRACT(1.4, 4.5)', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return 0.2 for DIVIDE(1.4, 4.5)', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.001);
  });

  it('should return "Error" for DIVIDE(1.4, 0)', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
