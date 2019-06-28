import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { relative } from 'path';

const useStyles = makeStyles({
  card: {
    maxWidth: 1200,
    position: "relative",
  },
  media: {
    height: 300,

  },
});

export default function Player() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://placekitten.com/200/200"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Play 
        </Button>
        <Button size="small" color="primary">
          Stop
        </Button>
      </CardActions>
    </Card>
  );
}
