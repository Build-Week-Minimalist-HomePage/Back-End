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
        
        it('returns JSON', done => {//testing data type being returned
            return request(server)
                .get('/')
                .then(res => {
                expect(res.type).toMatch('text/html');
                done();
            });
        });
        
    });
});