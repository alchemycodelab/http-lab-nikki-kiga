const supertest = require('supertest');
const app = require('../lib/app');
const request = supertest(app);

describe('createResponse', () => {
  it('can get plain text hi', () => {
    return request
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });

  it('can post, returns code 200 and plain text request body', () => {
    return request
      .post('/echo')
      .send('this is a test')
      .then(res => {
        expect(res.text).toEqual('this is a test');
      });
  });

  it('can get h1 with the word red', () => {
    return request
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>red</h1>');
      });

  });

  it('can get h1 with the word green', () => {
    return request
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1>green</h1>');
      });
  });

  it('can get h1 with the word blue', () => {
    return request
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1>blue</h1>');
      });
  });


});
