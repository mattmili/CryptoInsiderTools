import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import $ from 'jquery';
import Paper from 'material-ui/Paper';

const style = {
  height: 800,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',

};

export default class Ticker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    var self = this;
    var URL = 'http://localhost:8080/api/ticker?coin=bitcoin';
    return $.ajax({
      type: "get",
      dataType: 'json',
      url: URL,
      error: function(request, error) {
        // Handle Error here
      }
    }).done(function(response){
      self.setState({ 
        data: [
          {
            "id": "bitcoin",
            "name": "Bitcoin",
            "symbol": "BTC",
            "rank": "1",
            "price_usd": "1138.16",
            "price_btc": "1.0",
            "24h_volume_usd": "142525000.0",
            "market_cap_usd": "18419596742.0",
            "available_supply": "16183662.0",
            "total_supply": "16183662.0",
            "percent_change_1h": "-0.53",
            "percent_change_24h": "-2.56",
            "percent_change_7d": "7.66",
            "last_updated": "1488057846"
          }]
      });
    }.bind(this));
  }

  render() {      

    var name = this.state.data[0].symbol;
    var price = this.state.data[0].price_usd;
    var percent_change_24h = this.state.data[0].percent_change_24h;

    return (
      <MuiThemeProvider>
       
      </MuiThemeProvider>
    );
  }
}



