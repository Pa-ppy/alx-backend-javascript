const chai = require('chai');
const request = require('request');
const expect = chai.expect;

describe('API integration tests', () => {
  const baseUrl = 'http://localhost:7865';

  describe('GET /', () => {
    it('should return welcome message', (done) => {
      request.get(`${baseUrl}/`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('should return payment methods for valid id', (done) => {
      request.get(`${baseUrl}/cart/12`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return 404 for non-numeric id', (done) => {
      request.get(`${baseUrl}/cart/abc`, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments', () => {
    it('should return JSON with payment methods', (done) => {
      request.get(`${baseUrl}/available_payments`, { json: true }, (err, res, body) => {
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

  describe('POST /login', () => {
    it('should return personalized welcome message', (done) => {
      request.post({
        url: `${baseUrl}/login`,
        json: true,
        body: { userName: 'Betty' }
      }, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });
});
