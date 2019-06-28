import React from 'react'
import { getSongLyrics } from '../api'

// class LyricDisplay extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       song: []
//     }
//   }

//   componentDidMount() {
//     getLetsGroove(this.ourCallback)
//   }

//   ourCallback = (err, data) => {
//     if (err) {
//       console.log(err)
//     } else {
//       this.setState({
//         song: data.split("↵")
//       }, () => {
//         console.log(this.state)
//       })
//     }
//   }

//   render() {
//     return (
//       <>
//         <div className="scroll-left">
//           {this.state.song.map(el => <span key={el}>{el}</span> )}
//         </div>
//       </>
//     )
//   }
// }

// import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
// import CardActionArea from '@material-ui/core/CardActionArea'
// import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
// import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
// import { relative } from 'path'

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 1200,
//     position: 'relative'
//   },
//   media: {
//     height: 140
//   }
// })

export default class LyricDisplay extends React.Component {
  constructor () {
    super()
    this.state = {
      song: []
      // classes: useStyles()

    }
  }

  componentDidMount () {
    getSongLyrics(this.ourCallback)
  }

  ourCallback = (err, data) => {
    if (err) {
      console.log(err)
    } else {
      this.setState({
        song: data.split(',')
      }, () => {
        console.log(this.state)
      })
    }
  }

  render () {
    return (
      <Card>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" style={{ height: '20em', overflow: 'auto' }}>
            {this.state.song.map(el => <p style={{ textAlign: 'center', fontSize: '2em' }}key={el}>{el}</p>)}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}
