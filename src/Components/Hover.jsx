import React, { Component } from 'react';
import {colorScheme} from '../colorScheme.js';

class Hover extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }
    

  handleMouseHover = () => {
    this.setState((state) => {
      return {
        isHovering: !state.isHovering,
      };
    });
  };
    
  render() {
    const styles = {
      
      explore: {
        textAlign: 'center',
        margin: '0',
        fontFamily: 'Courier New',
      },
    
      difference: {
        display: 'inline-block',
        padding: '0 3em',
        lineHeight: '3em',
        transform: 'scale(2)',
        fontFamily: 'Open Sans',
        fontSize: '0.75em',
        color: '#34495e',
      }, 
      search: {
        display: 'inline-block',
        padding: '0 2em',
        lineHeight: '3em',
        color: '#34495e',
      },
      account: {
        position: 'absolute',
        left: '2em',
        top: '2em',
        listStyleType: 'none',
      },
      link : {
        textDecoration: 'none',
        color: '#34495e',
      },
      imgPos: {
        margin: '-1em -1em -3em 0',
        width: '11em',
        height: '8em',
      }
        
    };
      
    return (
      <div className="Appbar" style={styles.explore}>
        <div>
            <li style={styles.search}><a href="google.com" style={styles.link}>Home</a></li>
            <li style={styles.search}><a href="google.com" style={styles.link}>Learn</a></li>
            <li style={styles.search}><a href="google.com" style={styles.link}>Start a project</a></li>
            <li style={styles.search}><a href="https://bshehata.github.io/dashboardv2" style={styles.link}>Account</a></li>
            <li style={styles.search}><a href="google.com" style={styles.link}>Help</a></li>
        </div>
        <img style={styles.imgPos} src="https://i.pinimg.com/564x/0f/d5/96/0fd596108b6fad87271a543257e8f870.jpg"></img>
      </div>
    );
  }
}

export default Hover;
