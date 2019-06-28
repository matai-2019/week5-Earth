exports.seed = function (knex, Promise) {
  return knex('songs').del()
    .then(() => knex('songs').insert([
      { id: 99901, path: '/september-vid', artist: 'earth wind and fire', title: 'september' },
      { id: 99902, path: '/lets-groove-vid', artist: 'earth wind and fire', title: 'lets groove' },
      { id: 99903, path: '/boogie-wonderland-vid', artist: 'earth wind and fire', title: 'boogie wonderland' }
    ])
    )
}