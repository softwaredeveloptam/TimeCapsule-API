const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');

const app = require('../app');

const fixtures = require('./fixtures');

describe("Time Capsules", () => {
    before((done) => {
        // run migrations
        knex.migrate.latest()
            .then(() => {
                // run seeds
                return knex.seed.run();
            }).then(() => done());
    });

    it("lists all Time Capsules", (done) => {
        request(app)
          .get('/api/v1/timecapsule')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then((response) => {
              expect(response.body).to.be.a('array');
              expect(response.body).to.deep.equal(fixtures.timeCapsules);
              done();
          });
    });

    it("shows a Time Capsule by ID", (done) => {
        request(app)
          .get('/api/v1/timecapsule/1')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then((response) => {
              expect(response.body).to.be.a('object');
              expect(response.body).to.deep.equal(fixtures.timeCapsules[0]);
              done();
          });
    });

    it("creates a new Time Capsule", (done) => {
        request(app)
            .post('/api/v1/timecapsule')
            .send(fixtures.timeCapsule)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                fixtures.timeCapsule.id = response.body.id;
                expect(response.body).to.deep.equal(fixtures.timeCapsule);
                done();
            });
    });

    it("updates a Time Capsule", (done) => {
        request(app)
            .put('/api/v1/timecapsule/3')
            .send(fixtures.timeCapsuleId3)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal(fixtures.timeCapsuleId3);
                done();
            });
    });

    it("Deletes a Time Capsule", (done) => {
        request(app)
            .delete('/api/v1/timecapsule/3')
            .send(fixtures.timeCapsuleId3)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal({
                    deleted: true
                });
                done();
            });
    });
});