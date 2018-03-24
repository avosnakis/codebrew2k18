import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import AttachMoney from 'material-ui-icons/AttachMoney';
import Share from 'material-ui-icons/Share';
import School from 'material-ui-icons/School';

var fs = require('fs');

export default function OrganisationCard(props) {
  const styles = {
    card: {
      display: 'flex',
      maxHeight: 200,
      maxWidth: '80%',
      alignItems: 'center'
    },
    media: {
      height: 200,
      width: 200,
    },
    controls: {
      display: 'flex',
      alignment: 'center',
    }
  };
  console.log(props.data.img)

  return (
    <div style={{justifyContent:'center'}}>
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image={props.data.img ? props.data.img : ''}
          title={props.data.orgName ? props.data.orgName : ''}
        />
        <CardContent>
          {props.data.desc ? props.data.desc : ''}
        </CardContent>
        <div className={styles.controls}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <School />
              </ListItemIcon>
              <ListItemText primary="Learn More" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Share />
              </ListItemIcon>
              <ListItemText primary="Share" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AttachMoney />
              </ListItemIcon>
              <ListItemText primary="Donate" />
            </ListItem>
          </List>
        </div>
      </Card>
    </div>
  );
}
