const config = require('../knexfile');
const environment = 'development';
const knex = require('knex')(config[environment]);

const findByID = knex("description")
  .where({ user_id: 1 })
  .catch(err => {
    console.log('err', err);
  });

module.exports = { findByID };