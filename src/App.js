import React, { Component } from 'react';
import logo from './logo.svg';
import ToDo from './components/ToDo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDo/>
      </div>
    );
  }
}

export default App;
