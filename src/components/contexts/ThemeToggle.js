import React, { Component } from 'react'
import { ThemeContext } from './ThemeContext'

class ThemeToggle extends Component {

  static contextType = ThemeContext;
  
  render() {
    const {toggleTheme} = this.context;
    //console.log('toggleTheme :'+ toggleTheme);
    
    return (
      <button onClick={toggleTheme}>Toggle the Theme</button>
    );
  }
}

export default  ThemeToggle;