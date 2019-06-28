<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b3b4448a4805122176d44c504e5dc54b5a4ac2d8
import React from 'react';
import Container from '@material-ui/core/Container';
import { getSeptember } from '../api'

import Header from './Header'
import Player from './Player'

<<<<<<< HEAD
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

=======
>>>>>>> b3b4448a4805122176d44c504e5dc54b5a4ac2d8
export default class App extends React.Component {

  componentDidMount () {
    getSeptember(this.ourCallback)
  }
<<<<<<< HEAD
>>>>>>> d45f9006e198dfffe707afb1019c6513c7b9e5f8
=======
>>>>>>> b3b4448a4805122176d44c504e5dc54b5a4ac2d8

  ourCallback = (err, data) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data)
    }
  } {
    
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

