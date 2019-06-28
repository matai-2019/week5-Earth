import request from 'superagent'
// const september = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=september'
// const letsGroove = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=lets groove'
// const boogieWonderland = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=boogie wonderland'

export function getSongLyrics (callback) {
  return request.get('http://localhost:3000/api')
    .end((err, res) => {
      callback(err, res.text)
      if (err) console.log(err)
    })
}
