const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log "The total is: 120" and be called once', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');
  });

  it('should log "The total is: 20" and be called once', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 20');
  });
});
