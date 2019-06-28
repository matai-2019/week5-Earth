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

export default App
