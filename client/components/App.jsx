<<<<<<< HEAD
import React from 'react';
import Container from '@material-ui/core/Container';

import Header from './Header'
import Player from './Player'

const App = () => {
  return (
    <>
    <Container maxWidth="md">
    <Header />
    <h1>React development has begun!</h1>
    <Player />
    </Container>
    </>
  )
}
=======
import React from 'react'
import { getSeptember } from '../api'

export default class App extends React.Component {

  componentDidMount () {
    getSeptember(this.ourCallback)
  }
>>>>>>> d45f9006e198dfffe707afb1019c6513c7b9e5f8

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
