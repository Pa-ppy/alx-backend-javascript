const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  it('should return 200 and welcome message', (done) => {
    request.get('http://localhost:7865/', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return 200 and message with cart id', (done) => {
    request.get('http://localhost:7865/cart/42', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 42');
      done();
    });
  });

  it('should return 404 for non-numeric id', (done) => {
    request.get('http://localhost:7865/cart/abc', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('/available_payments endpoint', () => {
  it('should return payment methods object', (done) => {
    request.get('http://localhost:7865/available_payments', { json: true }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('/login endpoint', () => {
  it('should return welcome message with username', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: { userName: 'Betty' }
    };

    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal(undefined);
      expect(res.text || res.body || res).to.include('Welcome Betty');
      done();
    });
  });
});
