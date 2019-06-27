const express = require('express')
const request = require('superagent')

const router = express.Router()

const september = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=september'
// const letsGroove = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=lets groove'
// const boogieWonderland = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=earth fire and wind&song=boogie wonderland'

router.get('/s', (req, res) => {
  request
    .get(september)
    .then(septemberRes => {
      console.log(septemberRes.text)
      res.send(septemberRes.text)
    })
    .catch(err => console.error(err))
})

module.exports = router
