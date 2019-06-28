import React from 'react';
import Container from '@material-ui/core/Container';
import { getSeptember, getLetsGroove, getBoogie } from '../api'

import Header from './Header'
import Player from './Player'
import LyricDisplay from './LyricDisplay';

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      song: null
    }
  }

  // componentDidMount () {
  //   getSeptember(this.ourCallback)
  //   getLetsGroove(this.ourCallback)
  //   getBoogie(this.ourCallback)
  // }

  // ourCallback = (err, data) => {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     this.setState({
  //       song: data
  //     }, () => {
  //       console.log(this.state)
  //     })
  //   }
  // }

  // sth = () => {
  //   return getSeptember(this.ourCallback)
  // }

  // handleClick = () => {

  // }

  // render () {
  //   return (
  //     <>
  //       <button onClick={getSeptember(this.ourCallback)}>September</button>
  //       <p>{this.state.text}</p>
  //     </>

  // } 

  render () {
    return (<>
      <Container maxWidth="md">
        <Header songName ={this.state.song}/>
        <h1>React development has begun!</h1>
        <Player />
        <LyricDisplay />
        {/* <div>{this.state.song}</div>
        <button onClick={this.handleClick}>click</button> */}
      </Container>
    </>

    )
  }
}
