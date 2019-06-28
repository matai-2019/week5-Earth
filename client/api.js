import request from 'superagent'

// const september = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=september'
// const letsGroove = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=lets groove'
// const boogieWonderland = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=boogie wonderland'

export function getSeptember (callback) {
  console.log('hello!')
  return request.get('http://localhost:3000/s')
    .end((err, res) => {
      callback(err, res.text)
      if (err) console.log(err)
    })
}

// export function getLetsGroove () {
//   return request.get(letsGroove)
//     .then(res => {
//       return res.body
//     })
// }

// export function getBoogieWonderland () {
//   return request.get(boogieWonderland)
//     .then(res => {
//      // console.log(res.body)
//       return res.body
//     })
// }
