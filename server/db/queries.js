const knex = require('./knex'); // connection to database

module.exports = {
    getAll() {
        return knex('timecapsule');
    },
    getOne(id) {
        return knex('timecapsule').where('id', id).first();
    },
    create(timeCapsule) {
        return knex('timecapsule').insert(timeCapsule, '*');
    },
    update(id, timeCapsule) {
        return knex('timecapsule').where('id', id).update(timeCapsule, '*');
    },
    delete(id) {
        return knex('timecapsule').where('id', id).del();
    }
}