const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('should return success response when success is true', (done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.have.property('data', 'Successful response from the API');
      done();
    });
  });
});
