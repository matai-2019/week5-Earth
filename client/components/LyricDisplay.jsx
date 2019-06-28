import React from 'react'
import { getLetsGroove } from '../api'

class LyricDisplay extends React.Component {
  constructor() {
    super()
    this.state = {
      song: []
    }
  }

  componentDidMount() {
    getLetsGroove(this.ourCallback)
  }

  ourCallback = (err, data) => {
    if (err) {
      console.log(err)
    } else {
      this.setState({
        song: data.split("↵")
      }, () => {
        console.log(this.state)
      })
    }
  }

  render() {
    return (
      <>
        <div className="scroll-left">
          {this.state.song.map(el => <span key={el}>{el}</span> )}
        </div>
      </>
    )
  }
}

export default LyricDisplay
