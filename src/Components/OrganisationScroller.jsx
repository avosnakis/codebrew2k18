import React from 'react';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import OrganisationCard from './OrganisationCard.jsx'

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
        <OrganisationCard data={{
          img: "/images/unhrc.jpg",
          orgName: "UNHRC",
          desc: "The UNHRC is the United Nations Human Rights commission, a body for" +
          " defending human rights worldwide",
          }} />
        </ListItem>
        <ListItem>
          <OrganisationCard data={{
            img: "/images/unhrc.jpg",
            orgName: "UNHRC",
            desc: "The UNHRC is the United Nations Human Rights commission, a body for" +
            " defending human rights worldwide",
          }} />
        </ListItem>
        <ListItem>
          <OrganisationCard data={{
            img: "/images/unhrc.jpg",
            orgName: "UNHRC",
            desc: "The UNHRC is the United Nations Human Rights commission, a body for" +
            " defending human rights worldwide",
          }} />
        </ListItem>
        <ListItem>
          <OrganisationCard data={{
            img: "/images/unhrc.jpg",
            orgName: "UNHRC",
            desc: "The UNHRC is the United Nations Human Rights commission, a body for" +
            " defending human rights worldwide",
          }} />
        </ListItem>
        </div>
    </List>
  )
}
