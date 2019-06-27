import request from 'superagent'

const september = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=september'
const letsGroove = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=lets groove'
const boogieWonderland = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=boogie wonderland'

export function getSeptember () {
  return request.get(september)
    .then(res => {
      return res.body
    })
}

export function getLetsGroove () {
  return request.get(letsGroove)
    .then(res => {
      return res.body
    })
}

export function getBoogieWonderland () {
  return request.get(boogieWonderland)
    .then(res => {
      return res.body
    })
}
