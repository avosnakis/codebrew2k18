import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: '100%',
    position: 'relative',
    width: '800px',
    justifyContent: 'center',
    margin: '15px'
  },
  media: {
    height: 300,
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div style={{justifyContent:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.img}
          style={{ width:'800px', height:'350px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
