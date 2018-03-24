import React from 'react';
import { Link } from 'react-router-dom';

import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import AttachMoney from 'material-ui-icons/AttachMoney';
import Share from 'material-ui-icons/Share';
import School from 'material-ui-icons/School';


export default function ButtonsList(props) {
  return (
    <div className={{
      display: 'flex',
      alignment: 'right',
    }}>
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
        <ListItem button component={Link} to={"/donations/" + props.orgName}>
          <ListItemIcon>
            <AttachMoney />
          </ListItemIcon>
          <ListItemText primary="Donate" />
        </ListItem>
      </List>
    </div>
  )
}
