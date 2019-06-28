import React from 'react'
import { getSeptember, getLetsGroove, getBoogie } from '../api'

export default class App extends React.Component {


  componentDidMount () {
    getSeptember(this.ourCallback)
    getLetsGroove(this.ourCallback)
    getBoogie(this.ourCallback)
  }

  ourCallback = (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
      console.log(typeof data)
    }
  }

  handleClick = () => {
    getSeptember(this.ourCallback)
  }



  render () {
    return (
      <>
      <button onClick={this.handleClick}>September</button>
      <h1>React development has begun!</h1>
      </>
    )
  }
}
