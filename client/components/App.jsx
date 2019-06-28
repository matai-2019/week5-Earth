import React from 'react';
import Container from '@material-ui/core/Container';
import { getSeptember } from '../api'

import Header from './Header'
import Player from './Player'

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
    return (<>
    <Container maxWidth="md">
    <Header />
    <h1>React development has begun!</h1>
    {/* <Player /> */}
    </Container>
    </>
    )
  }
}

