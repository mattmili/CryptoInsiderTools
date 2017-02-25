import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {    
    
    return (
      <MuiThemeProvider>
        <h1>HELLO WORLD</h1>
      </MuiThemeProvider>
    );
  }
}



