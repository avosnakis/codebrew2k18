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
          img: "https://static1.squarespace.com/static/51a632d3e4b0a0d58d81c520/t/57b63fb2893fc004c0020813/1471561651662/?format=1000w",
          orgName: "Let's Give the Gift of a Fresh Start",
          desc: "Earlier this month we profiled eleven Syrian families that were preparing to begin new lives in America.  They have escaped a horrible war, and have finally secured a degree of safety and security, but the road will be very tough for them.  They will be starting at zero in a new country.  In addition to the culture shock, they will face innumerable obstacles, including the need to learn an entirely new language.  As they attempt to get their footing, they will be provided with little more than the bare minimum needed to subsist. This holiday season, let's give them a little breathing room." ,
          }} />
        </ListItem>
        <ListItem>
          <OrganisationCard data={{
            img: "http://islamcharity.org.za/wp-content/uploads/2016/06/islam-Charity-300x300.png",
            orgName: "Nepal Earthquake Relief and Rehabilitation Fund",
            desc: "A massive earthquake of 7.9 magnitude has struck Nepal causing widespread destruction. ANMF is a US based 501(c)(3) tax-exempt organization working in Nepal since 1997.- All the money raised (platform fees are covered by another donor so 100% will go to Nepal) will be donated to local organizations that have been a history of working in Nepal.",
          }} />
        </ListItem>
        <ListItem>
          <OrganisationCard data={{
            img: "https://upload.wikimedia.org/wikipedia/en/d/da/KEY_LOGO.jpg",
            orgName: "Right to Vape Campaign",
            desc: "On August 8th 2016 the FDA's deeming regulations took effect classifying all vapor products as tobacco.  This new classification will result in 99.99% of vapor products being banned by August 2018. These bans are scheduled to occur because of something known as the 'predicate date' -- February 15, 2007. Under the FDA's rule, any vapor product that has come to market since that date (i.e., every product on the market today) must retroactively undergo a potentially multi-million dollar pre-market approval process if they wish to have a hope of staying on the market past August 2018. ",
          }} />
        </ListItem>
        <ListItem>
          <OrganisationCard data={{
            img: "http://www.seedsofafrica.com/wp-content/themes/seedsofafrica/images/logo_soa.png",
            orgName: "Free Offline App for Universal Education",
            desc: "There is an abundance of high quality educational content online, but 60% of the world is not on the Internet. It will take decades for the Internet to reach them, leaving generations of learners behind. we believe it’s essential to act now to make the offline learning revolution a reality, and give these students the opportunities they need to break this cycle of poverty",
          }} />
        </ListItem>
        </div>
    </List>
  )
}
