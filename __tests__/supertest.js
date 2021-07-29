const request = require('supertest');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  })

  describe('/postQuestionnaire/', () => {
    describe('/ranks', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
        .get('/postQuestionnaire/ranks')
        .expect('Content-Type', /application\/json/)
        .expect(200);
      });
    }),
    describe('/getUserResults', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
        .get('/postQuestionnaire/getUserResults')
        .expect('Content-Type', /application\/json/)
        .expect(200);
      });
    });
    xdescribe('/', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
        .post('/postQuestionnaire')
        .send({})
        .expect('Content-Type', /application\/json/)
        .expect(200);
      });
    });
  });
});
  