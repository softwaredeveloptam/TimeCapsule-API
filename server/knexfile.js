module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://User:user@localhost/timecapsule'
  },
  test: {
    client: 'pg',
    connection: 'postgres://User:user@localhost/test-timecapsule'
  }
};
