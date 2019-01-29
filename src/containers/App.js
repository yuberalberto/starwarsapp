import React, { Component } from 'react';
import './App.css';
import Card from '../components/Card' // import the component Card
import 'tachyons'; // Styles, its something look alike bootstrap

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    );
  }
}

export default App;
