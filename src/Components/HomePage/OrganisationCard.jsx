import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import ButtonsList from '../CustomButtons/ButtonsList.jsx';
import OrganisationCardImage from './OrganisationCardImage.jsx';

// TODO figure out why the images aren't rendering
export default function OrganisationCard(props) {
  const styles = {
    card: {
      display: 'flex',
      maxHeight: 300,
      width: '100%',
    },
    media: {
      height: 200,
      width: 200,
    },
  };

  return (
    <div style={styles.card}>
      <Card style={styles.card}>
        <CardMedia
          image={props.data.img}
          style={styles.media}
        />
        {/* <OrganisationCardImage data={{src: props.data.img}} /> */}
        <CardContent style={{ width:'80%'}}>
          <h2>{props.data.orgName}</h2> 
          <p>{props.data.desc} </p>
        </CardContent>
        <CardActions>
          <ButtonsList orgName={props.data.orgName}/>
        </CardActions>
      </Card>
    </div>
  );
}
