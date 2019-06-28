import React from 'react'
import Container from '@material-ui/core/Container'
import { getSongLyrics } from '../api'

import Header from './Header'
import Player from './Player'
import LyricDisplay from './LyricDisplay'

export default class App extends React.Component {

  componentDidMount () {
    getSongLyrics(this.ourCallback)
  }

  ourCallback = (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
    }
  }

  render () {
    return (<>
    <Container maxWidth="md">
      <Header />
      <br></br>
      <Player />
      <br></br>
      <LyricDisplay />
    </Container>
    </>
    )
  }
}
