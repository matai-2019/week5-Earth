const express = require('express')
const request = require('superagent')
const convert = require('xml-js')

const router = express.Router()

const september = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=september'
// const letsGroove = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=lets groove'
// const boogieWonderland = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=boogie wonderland'

router.get('/s', (req, res) => {
  request
    .get(september)
    .then(septemberRes => {
      // eslint-disable-next-line standard/object-curly-even-spacing
      const data = convert.xml2js(septemberRes.text, { compact: true, spaces: 4 })
      console.log(data.GetLyricResult.Lyric._text)
      res.send(data.GetLyricResult.Lyric._text)
    })
    .catch(err => console.error(err))
})

module.exports = router
