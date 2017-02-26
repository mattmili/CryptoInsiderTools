import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {        
    return (
      <MuiThemeProvider>
        <h1>Crypto Insider Price Ticker</h1>
      </MuiThemeProvider>
    );
  }
}



