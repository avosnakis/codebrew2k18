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

  console.log(CHARITIES["UNHCR"])
  return (
    <List style={styles.descriptionPage}>
      <div style={{float:"right"}}>
        <ListItem>
          <OrganisationCard 
            data={{img: CHARITIES["UNHCR"].img,
              orgName: "UNHCR",
              desc: CHARITIES["UNHCR"].desc}} />
        </ListItem>
        <ListItem>
          <OrganisationCard 
            data={{img: CHARITIES["UNHCR"].img,
              orgName: "UNHCR",
              desc: CHARITIES["UNHCR"].desc}} />
        </ListItem>
        <ListItem>
          <OrganisationCard
            data={{img: CHARITIES["UNHCR"].img,
              orgName: "UNHCR",
              desc: CHARITIES["UNHCR"].desc}} />
        </ListItem>
      </div>
    </List>
  )
}
