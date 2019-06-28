const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')[environment]
const connection = require('knex')(config)

module.exports = { getSongs }

function getSongs (title, db = connection) {
  return db('songs')
    .where('title', title)
    .first()
}
