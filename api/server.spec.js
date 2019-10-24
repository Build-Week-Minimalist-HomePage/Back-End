const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    //Testing Server GET Request
    describe('GET /', () => {

        it('returns 200 OK', () => {//testing router http status
            return request(server)
                .get('/')
                .then(res => {
                expect(res.status).toBe(200);
            });
        });
        
        // should return text
        it('should return a text greeting', async () => {
            const response = await request(server).get('/');
            expect(response.type).toMatch(/[A-Za-z0-9]+/);
        });
        
    });
});

describe('POST /login', function() {
    // login with wrong credentials
    it('responds with json', function(done) {
      request(server)
        .post('/api/auth/login')
        .send({username: "someuser", password: "somelogin"})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(401)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });

    // login with without password
    it('responds with json', function(done) {
        request(server)
          .post('/api/auth/login')
          .send({username: "someuser"})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
      });
  });