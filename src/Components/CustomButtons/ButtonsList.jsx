import React from 'react';
import { Link } from 'react-router-dom';

import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import AttachMoney from 'material-ui-icons/AttachMoney';
import Share from 'material-ui-icons/Share';
import School from 'material-ui-icons/School';

import { CharityButton, DonateButton, ShareButton } from './ListButtons.jsx';


export default function ButtonsList(props) {
  return (
    <div className={{
      display: 'flex',
      alignment: 'right',
    }}>
      <List>
        <CharityButton orgName={props.orgName}/>
        <ShareButton />
        <DonateButton orgName={props.orgName}/>
      </List>
    </div>
  )
}
