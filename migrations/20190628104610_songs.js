exports.up = (knex, Promise) => {
  return knex.schema.createTable('songs', table => {
    table.increments('id').primary()
    table.string('path')
    table.string('artist')
    table.string('title')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('songs')
}