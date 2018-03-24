import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import { createMuiTheme } from 'material-ui/styles';

export default function NavBarComps(props) {
  const styles = {
    fontFamily: "Open sans, serif",
      
    explore: {
//      position: 'absolute',
//      left: '2px',
//      textTransform: 'uppercase',
//      color: '#34495e',
//      letterSpacing: '2px',
      textAlign: 'center',
      margin: '0',
      border: '1px solid',
    },
    
    innerLi: {
        display: 'inline-block',
        padding: '0 3em',
        lineHeight: '3em',
        
    }, 
    search: {
        
    },
    account: {
        position: 'absolute',
        left: '2em',
        top: '2em',
        listStyleType: 'none',
        
    }
  };
  
  return (
    <div className="Appbar" style={styles.explore}>
      <ul>
        <li style={styles.innerLi}>You</li>
        <li style={styles.innerLi}>Only</li>
        <li style={styles.innerLi}>Need</li>
        <li style={styles.innerLi}>Love</li>
        <li style={styles.account}>Sign in</li>
      </ul>
    </div>
  );
}