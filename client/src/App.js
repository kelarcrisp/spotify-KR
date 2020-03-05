import React, { Component } from 'react';
import './App.css';
import SignIn from './containers/SignIn/SignIn';
import Profile from './components/Profile/Profile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {

  getHashParams = () => {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  render() {
    return (
      <Router>
        <div className="App" >
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/" component={SignIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
