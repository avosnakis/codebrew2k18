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
      <div style={{float:"right"}}>
        <ListItem>
          <OrganisationCard data={{...CHARITIES["UNHCR"]}} />
        </ListItem>
        <ListItem>
          <OrganisationCard data={{...CHARITIES["UNHCR"]}} />
        </ListItem>
        <ListItem>
          <OrganisationCard data={{...CHARITIES["UNHCR"]}} />
        </ListItem>
        <ListItem>
          <OrganisationCard data={{...CHARITIES["UNHCR"]}} />
        </ListItem>
      </div>
    </List>
  )
}
