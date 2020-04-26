
exports.up = function(knex) {
  return knex.schema.createTable('timecapsule', (table) => {
      table.increments();
      table.text('user');
      table.text('note');
      table.datetime('date');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('timecapsule');
};
