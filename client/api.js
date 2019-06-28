import request from 'superagent'

export function getSeptember (callback) {
  return request.get('http://localhost:3000/s')
    .end((err, res) => {
      callback(err, res.text)
      if (err) console.log(err)
    })
}

export function getLetsGroove (callback) {
  return request.get('http://localhost:3000/g')
    .end((err, res) => {
      callback(err, res.text)
      if (err) console.log(err)
    })
}

export function getBoogie (callback) {
  return request.get('http://localhost:3000/b')
    .end((err, res) => {
      callback(err, res.text)
      if (err) console.log(err)
    })
}
