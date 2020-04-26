const timecapsules = require('../timecapsule')

exports.seed = function(knex, Promise) {
  
  return knex('timecapsule')
          .del()
          .then(() => {
            return knex('timecapsule').insert(timecapsules);
          });
};
