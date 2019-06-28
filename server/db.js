const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getSongs
}

function getSongs (db = connection) {
  return db('songs')
    .select()
}
