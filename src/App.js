import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { MapWithAKmlLayer } from './MapWithAKmlLayer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <MapWithAKmlLayer />

      </div>
    );
  }
}

export default App;
