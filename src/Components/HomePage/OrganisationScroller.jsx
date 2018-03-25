import React from 'react';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import OrganisationCard from './OrganisationCard.jsx'

import CHARITIES from '../../api.js';

export default function OrganisationScroller(props) {
  const styles = {
    descriptionPage: {
      maxHeight: '100%',
      display: 'flex',
      justifyContent: 'center',
      background: '#FBFBF7',
      overflow: 'auto'
    },
    panels: {
      minHeight: '10vh',
      overflow: 'hidden',
    }
  }

  return (
    <List style={styles.descriptionPage}>
      <div>        
        <ListItem>
          <OrganisationCard 
            data={{img: CHARITIES["TRLF"].img,
              orgName: "TRLF",
              desc: CHARITIES["TRLF"].desc}} />
        </ListItem>
        <ListItem>
          <OrganisationCard 
            data={{img: CHARITIES["UNHRC"].img,
              orgName: "UNHRC",
              desc: CHARITIES["UNHRC"].desc}} />
        </ListItem>
      </div>
    </List>
  )
}
