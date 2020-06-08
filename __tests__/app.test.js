const supertest = require('supertest');
const app = require('../lib/app');
const request = supertest(app);
const createResponse = require('../lib/utils/createResponse');
const parseResponse = require('../lib/utils/createResponse');

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
        //Might need to clarify what goes into a request
      .post('/echo', { body: 'this is a test' })
      .then(res => {

        //Not sure if createResponse is needed for this test just need the response to match a parsedResponse
        expect(parseResponse(res)).toEqual(createResponse({ body: 'this is the body', contentType:'text/plain', status: '200 OK' }));
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
