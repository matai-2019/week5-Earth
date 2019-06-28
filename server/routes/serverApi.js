const express = require('express')
const request = require('superagent')
const convert = require('xml-js')

const router = express.Router()

const { getSongs } = require('../db')

const songURL = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?'
let currentURL = ''
// const letsGroove = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=lets groove'
// const boogieWonderland = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=boogie wonderland'

router.get('/api', (req, res) => {
  getSongs('lets groove')
    .then(songData => {
      console.log(songData)
      currentURL = `artist=${songData.artist}&song=${songData.title}`
      let APIURL = songURL + currentURL
      request
        .get(APIURL)
        .then(apiRes => {
          // eslint-disable-next-line standard/object-curly-even-spacing
          const data = convert.xml2js(apiRes.text, { compact: true, spaces: 4 })
          console.log(data.GetLyricResult.Lyric._text)
          res.send(data.GetLyricResult.Lyric._text)
        })
        .catch(err => console.error(err))
        })
})

router.get('/g', (req, res) => {
  request
    .get(letsGroove)
    .then(letsGrooveRes => {
      // eslint-disable-next-line standard/object-curly-even-spacing
      const data = convert.xml2js(letsGrooveRes.text, { compact: true, spaces: 4 })
      console.log(data.GetLyricResult.Lyric._text)
      res.send(data.GetLyricResult.Lyric._text)
    })
    .catch(err => console.error(err))
})

router.get('/b', (req, res) => {
  request
    .get(boogieWonderland)
    .then(boogieWonderlandRes => {
      // eslint-disable-next-line standard/object-curly-even-spacing
      const data = convert.xml2js(boogieWonderlandRes.text, { compact: true, spaces: 4 })
      console.log(data.GetLyricResult.Lyric._text)
      res.send(data.GetLyricResult.Lyric._text)
    })
    .catch(err => console.error(err))
})

module.exports = router
