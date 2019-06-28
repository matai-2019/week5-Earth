import React from 'react'
import { getSeptember, getLetsGroove, getBoogie } from '../api'

export default class App extends React.Component {
  state = {
    text: null
  }

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
      return data // data is a string
    }
  }

  song = getSeptember(this.ourCallback)

  handleClick = (e) => {
    this.setState({
      text: this.song
    })
  }

  render () {
    return (
      <>
        <button onClick={getSeptember(this.ourCallback)}>September</button>
        <p>{this.state.text}</p>
      </>
    )
  }
}
