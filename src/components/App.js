import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './Main';
import Ticker from './Ticker';

injectTapEventPlugin();

export default class App extends React.Component {
  render(){
    return(
      <Router history={hashHistory}>
        <Route path='/' component={Main}/>
        <Route path='/ticker' component={Ticker}/>
      </Router>
    );
  }
}
