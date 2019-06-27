import React from 'react'
import { getSeptember } from '../api'

export default class App extends React.Component {

  componentDidMount () {
    getSeptember(this.ourCallback)
  }

  ourCallback = (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
    }
  }

  render () {
    return (
      <h1>React development has begun!</h1>
    )
  }
}
