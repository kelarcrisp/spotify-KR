import React, { Component } from 'react';
import './App.css';
import SignIn from './containers/SignIn/SignIn';
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
      <div className="App" >
        <SignIn />
      </div>
    );
  }
}


export default App;
