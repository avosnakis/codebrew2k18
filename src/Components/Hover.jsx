import React, { Component } from 'react';
import { render } from 'react-dom';

class HoverExample extends Component {
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
      },
    
      difference: {
        display: 'inline-block',
        padding: '0 3em',
        lineHeight: '3em',
        transform: 'scale(2)',
        fontFamily: 'sans-serif',
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
      }
        
    };
      
    return (
      <div className="Appbar" style={styles.explore}>
        <div
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          <li style={styles.difference}>Explore</li>
          {
            this.state.isHovering &&
            <div>
                <li style={styles.search}><a href="google.com" style={styles.link}>Search</a></li>
                <li style={styles.search}><a href="google.com" style={styles.link}>Teach</a></li>
                <li style={styles.search}><a href="google.com" style={styles.link}>Start a project</a></li>
                <li style={styles.search}><a href="google.com" style={styles.link}>Account</a></li>
                <li style={styles.search}><a href="google.com" style={styles.link}>Help</a></li>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default HoverExample;